import React, { useEffect, useState } from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import {
  apiGetUserCarts,
  apiSyncQuotes,
  apiDeleteQuote,
  apiUpdateQuantity,
} from "../../api/quote";
import { apiGetGuestQuote, apiDeleteGuestQuote } from "../../api/guestQuote";
import squareImg from "../../../public/img/1600x1600.png";
import { useDispatch } from "react-redux";
import {
  setUserCartAC,
  setLocalCartAC,
  deleteCartItemAC,
  changeCartItemQuantityAC,
} from "../../state/actionCreators/cartAC";

function index() {
  const dispatch = useDispatch();
  const { session } = useSelector((state) => state.session);
  const { cart } = useSelector((state) => state.cart);
  const [guestId, setGuestId] = useState(localStorage.getItem("guestId"));
  const [subTotal, setSubTotal] = useState(0);

  const getSubTotal = () => {
    let _subTotal = 0;
    for (let cartItem of cart) {
      _subTotal += cartItem.quantity * cartItem.cost;
    }
    setSubTotal(_subTotal);
  };

  useEffect(() => {
    if (session.id) {
      dispatch(setUserCartAC());
    } else if (guestId) {
      dispatch(setLocalCartAC(guestId));
    }
  }, [session]);

  useEffect(() => {
    getSubTotal();
  }, [cart]);

  const handelDelete = (quoteId) => {
    dispatch(deleteCartItemAC(quoteId, guestId));
  };

  const quantityChange = (quoteId, quantity) => {
    dispatch(changeCartItemQuantityAC(quoteId, quantity, guestId));
  };

  return (
    <div className="cart-container | container">
      <div className="cart">
        <h1 className="ff-heading padding-block-500 border-bottom fs-primary-heading">
          Your Cart
        </h1>
        <div>
          <ul role="list">
            {cart.map((quote) => (
              <li className="cart-item | border-bottom padding-block-300 flex-v-center">
                <div className="cart-item-main">
                  <h2 className="ff-heading">{quote.name}</h2>
                  <ul role="list" className="text-neutral-700 fs-body">
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
                </div>
                <div className="cart-item-info">
                  <div className="cart-item-info-quantity | flex-all-center flow-h-400">
                    <button
                      onClick={() =>
                        quantityChange(quote.id, quote.quantity - 1)
                      }
                    >
                      <i class="fa-regular fa-minus"></i>
                    </button>
                    <input
                      value={quote.quantity}
                      onChange={(e) => quantityChange(quote.id, e.target.value)}
                    />
                    <button
                      onClick={() =>
                        quantityChange(quote.id, quote.quantity + 1)
                      }
                    >
                      <i class="fa-regular fa-plus"></i>
                    </button>
                  </div>
                  <div className="cart-item-info-price | fw-semi-bold fs-price flex-all-center">
                    {Number(quote.cost).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </div>
                </div>
                <div className="cart-item-utility | flow-h-300">
                  <button onClick={() => handelDelete(quote.id)}>
                    <i class="fa-light fa-pen"></i>
                  </button>
                  <button onClick={() => handelDelete(quote.id)}>
                    <i className="fa-light fa-trash"></i>
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="checkout-container">
            <div className="checkout-dummy"> &nbsp;</div>
            <div className="checkout-totals | padding-block-600 flow-300">
              <div className="fw-semi-bold">
                <span>SUBTOTAL</span>
                <span>
                  {subTotal.toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </span>
              </div>
              <div className="fw-semi-bold">
                <span>SALE TAX</span>
                <span>
                  {(subTotal * 0.05).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </span>
              </div>
              <div className="fw-semi-bold border-top fs-price padding-block-400">
                <span>TOTAL</span>
                <span>
                  {(subTotal * 0.05 + subTotal).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </span>
              </div>
              <button className="checkout-btn | button-inverted">
                <i class="fa-light fa-lock-keyhole"></i>Check Out
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-ad">
        <div className="container border-left">
          {/* <div>
            <div className="img-container">
              <img src={squareImg} />
            </div>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div></div>
          <div></div> */}
        </div>
      </div>
    </div>
  );
}

export default index;
