import React, { useEffect, useState } from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import { apiGetUserCarts, apiAddQuote } from "../../api/quote";
import { apiGetOption } from "../../api/option";
import { apiGetStep } from "../../api/step";
import { apiGetStepSet } from "../../api/stepSet";
import { apiAddQuoteItem } from "../../api/quoteItem";

function index() {
  const { session } = useSelector((state) => state.session);
  const [cart, setCart] = useState([]);

  const getUserCart = async () => {
    const response = await apiGetUserCarts();
    console.log(response.data);
    setCart(response.data);
  };

  const getLocalCart = async () => {
    const _cart = JSON.parse(localStorage.getItem("cart"));
    if (_cart) {
      for (let quote of _cart) {
        const stepSet = await apiGetStepSet(quote.stepSetId);
        quote.name = stepSet.data.name;
        for (let quoteItem of quote.quoteItems) {
          const step = await apiGetStep(quoteItem.stepId);
          quoteItem.step = step.data;
          if (quoteItem.measurements == undefined) {
            const option = await apiGetOption(quoteItem.optionId);
            quoteItem.option = option.data;
            console.log(quoteItem);
          }
        }
      }
      setCart(_cart);
    }
  };

  const syncLocalToDb = async () => {
    const _cart = JSON.parse(localStorage.getItem("cart"));
    if (_cart.length) {
      for (let quote of _cart) {
        const quoteItems = quote.quoteItems;
        delete quote.quoteItems;
        quote.userId = session.id;
        const response = await apiAddQuote(quote);
        for (let quoteItem of quoteItems) {
          quoteItem.quoteId = response.data.id;
          await apiAddQuoteItem(quoteItem);
        }
      }
      localStorage.removeItem("cart");
    }
  };

  useEffect(() => {
    if (session.id) {
      syncLocalToDb();
      getUserCart();
    } else {
      getLocalCart();
    }
  }, [session]);

  return (
    <div className="container">
      <ul role="list">
        {cart.map((quote) => (
          <li>
            <h2>{quote.name}</h2>
            <ul role="list">
              {quote.quoteItems.map((quoteItem) => {
                if (!quoteItem.measurements)
                  return (
                    <li>{`${quoteItem.step.name}: ${quoteItem.option.name}`}</li>
                  );
                else
                  return (
                    <li>{`${quoteItem.step.name}: ${quoteItem.measurements}`}</li>
                  );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default index;
