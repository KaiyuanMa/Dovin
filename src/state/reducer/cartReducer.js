const reducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case "SET_CART":
      return { ...state, cart: action.cart };
    case "ADD_CART_ITEM":
      return { ...state, cart: [...state.cart, action.cartItem] };
    case "DEL_CART_ITEM":
      const newCart1 = state.cart.filter(
        (cartItem) => action.quoteId != cartItem.id
      );
      return {
        ...state,
        cart: newCart1,
      };
    case "CHANGE_CART_ITEM_QUANTITY":
      const newCart2 = [...state.cart];
      for (let i = 0; i < newCart2.length; i++) {
        if (newCart2[i].id === action.quoteId) {
          newCart2[i] = { ...newCart2[i], quantity: action.quantity };
          break;
        }
      }
      return { ...state, cart: newCart2 };
    case "REPLACE_CART_ITEM":
      const newCart3 = [...state.cart];
      for (let i = 0; i < newCart3.length; i++) {
        if (newCart3[i].id === action.quoteId) {
          newCart3[i] = action.cartItem;
          break;
        }
      }
      return { ...state, cart: newCart3 };
    case "EMPTY_CART":
      return { ...state, cart: [] };
    default:
      return state;
  }
};

export default reducer;
