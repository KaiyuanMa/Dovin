const reducer = (state = { cart: [] }, action) => {
  switch (action.type) {
    case "SET_CART":
      return { ...state, cart: action.cart };
    case "ADD_CART_ITEM":
      return { ...state, cart: [...state.cart, action.cartItem] };
    case "DEL_CART_ITEM":
      const dummy = state.cart.filter(
        (cartItem) => action.quoteId != cartItem.id
      );
      return {
        ...state,
        cart: dummy,
      };
    case "CHANGE_CART_ITEM_QUANTITY":
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === action.quoteId) {
          state.cart[i] = { ...state.cart[i], quantity: action.quantity };
          break;
        }
      }
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
