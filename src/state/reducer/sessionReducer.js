const reducer = (state = { session: {} }, action) => {
  switch (action.type) {
    case "SET_SESSION":
      return { ...state, session: action.session };
    default:
      return state;
  }
};

export default reducer;
