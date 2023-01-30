const initialState = {
  session: {},
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SESSION":
      return { ...state, session: action.session };
    case "SET_ERROR":
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default reducer;
