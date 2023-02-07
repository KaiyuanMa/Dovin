import { combineReducers } from "redux";
import sessionReducer from "./sessionReducer";
import cartReducer from "./cartReducer";

const reducers = combineReducers({
  session: sessionReducer,
  cart: cartReducer,
});

export default reducers;
