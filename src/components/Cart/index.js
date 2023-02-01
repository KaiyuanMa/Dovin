import React, { useEffect, useState } from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import { apiGetUserCarts } from "../../api/quote";

function index() {
  const { session } = useSelector((state) => state.session);
  const [cart, setCart] = useState([]);

  const getUserCart = async () => {
    const response = await apiGetUserCarts();
    setCart(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    if (session.id) {
      getUserCart();
    }
  }, []);

  return (
    <div className="container">
      <ul role="list">
        {cart.map((quote) => (
          <li>
            <h2>{quote.name}</h2>
            <ul role="list">
              {quote.quoteItems.map((quoteItem) => {
                if (quoteItem.measurements === null)
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
