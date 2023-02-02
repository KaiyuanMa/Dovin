import React, { useEffect, useState } from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import { apiGetUserCarts, apiAddQuote, apiSyncQuotes } from "../../api/quote";
import { apiGetOption } from "../../api/option";
import { apiGetStep } from "../../api/step";
import { apiGetStepSet } from "../../api/stepSet";
import { apiAddQuoteItem } from "../../api/quoteItem";

function index() {
  const { session } = useSelector((state) => state.session);
  const [cart, setCart] = useState([]);

  const getUserCart = async () => {
    if (localStorage.getItem("guestId")) await syncCart();
    const response = await apiGetUserCarts();
    console.log(response.data);
    setCart(response.data);
  };

  const syncCart = async () => {
    const guestId = localStorage.getItem("guestId");
    await apiSyncQuotes(guestId);
    localStorage.removeItem("guestId");
  };

  useEffect(() => {
    if (session.id) {
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
