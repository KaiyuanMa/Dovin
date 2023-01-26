import { apiGetSessionUser, apiSetSession, apiSignUp } from "../../api/session";
import Cookies from "js-cookie";

const login = (credentials) => {
  return async (dispatch) => {
    try {
      let response = await apiSetSession(credentials);
      const { token } = response.data;
      Cookies.set("token", token, {
        expires: 1,
        secure: true,
        path: "/",
      });
      response = await apiGetSessionUser(token);
      dispatch({ type: "SET_SESSION", session: response.data });
    } catch (ex) {
      console.log(ex);
    }
  };
};

const logout = () => {
  return (dispatch) => {
    Cookies.remove("token");
    dispatch({ type: "SET_SESSION", session: {} });
  };
};

const exchangeToken = () => {
  return async (dispatch) => {
    const token = Cookies.get("token");
    if (token) {
      const response = await apiGetSessionUser(token);
      console.log(response.data);
      dispatch({ type: "SET_SESSION", session: response.data });
    } else dispatch({ type: "SET_SESSION", session: {} });
  };
};

export { login, logout, exchangeToken };
