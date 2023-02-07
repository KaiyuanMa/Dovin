import {
  apiGetUserCarts,
  apiSyncQuotes,
  apiDeleteQuote,
  apiUpdateQuantity,
} from "../../api/quote";

import {
  apiGetGuestQuote,
  apiDeleteGuestQuote,
  apiGuestUpdateQuoteQuantity,
} from "../../api/guestQuote";
import { exchangeToken } from "./sessionAC";

const setUserCartAC = () => {
  return async (dispatch) => {
    try {
      if (localStorage.getItem("guestId")) {
        await apiSyncQuotes(localStorage.getItem("guestId"));
        localStorage.removeItem("guestId");
      }
      const { data } = await apiGetUserCarts();
      dispatch({
        type: "SET_CART",
        cart: data,
      });
    } catch (ex) {
      console.log(ex);
    }
  };
};

const setLocalCartAC = (guestId) => {
  return async (dispatch) => {
    try {
      const { data } = await apiGetGuestQuote(guestId);
      dispatch({
        type: "SET_CART",
        cart: data,
      });
    } catch (ex) {
      console.log(ex);
    }
  };
};

// const addCartItemAC = (userId) => {
//     return async(dispatch) => {
//     }
// }

const deleteCartItemAC = (quoteId, guestId) => {
  return async (dispatch) => {
    try {
      if (guestId) {
        await apiDeleteGuestQuote(guestId, quoteId);
      } else await apiDeleteQuote(quoteId);
      console.log(1);
      dispatch({
        type: "DEL_CART_ITEM",
        quoteId: quoteId,
      });
    } catch (ex) {
      console.log(ex);
    }
  };
};

const changeCartItemQuantityAC = (quoteId, quantity, guestId) => {
  return async (dispatch) => {
    try {
      if (guestId) {
        await apiGuestUpdateQuoteQuantity(quoteId, quantity, guestId);
      } else {
        await apiUpdateQuantity(quoteId, quantity);
      }
      dispatch({
        type: "CHANGE_CART_ITEM_QUANTITY",
        quoteId: quoteId,
        quantity: quantity,
      });
    } catch (ex) {
      console.log(ex);
    }
  };
};

export {
  setUserCartAC,
  setLocalCartAC,
  deleteCartItemAC,
  changeCartItemQuantityAC,
};
