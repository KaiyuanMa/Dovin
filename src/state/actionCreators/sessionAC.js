import { apiGetSessionUser, apiSetSession, apiSignUp } from "../../api/session";
import { apioAuthGoogle } from "../../api/oAuth";
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
      dispatch({ type: "SET_ERROR", error: "" });
    } catch (ex) {
      console.log(ex);
      dispatch({ type: "SET_ERROR", error: ex.response.data.message });
    }
  };
};

const googleLogin = (googleToken) => {
  return async (dispatch) => {
    try {
      let response = await apioAuthGoogle({ token: googleToken });
      const { token } = response.data;
      Cookies.set("token", token, {
        expires: 1,
        secure: true,
        path: "/",
      });
      response = await apiGetSessionUser(token);
      dispatch({ type: "SET_SESSION", session: response.data });
      dispatch({ type: "SET_ERROR", error: "" });
    } catch (ex) {
      console.log(ex);
      dispatch({ type: "SET_ERROR", error: ex.response.data.message });
    }
  };
};

const logout = () => {
  return (dispatch) => {
    Cookies.remove("token");
    dispatch({ type: "SET_SESSION", session: {} });
    dispatch({ type: "SET_ERROR", error: "" });
  };
};

const exchangeToken = () => {
  return async (dispatch) => {
    const token = Cookies.get("token");
    if (token) {
      const response = await apiGetSessionUser(token);
      dispatch({ type: "SET_SESSION", session: response.data });
    } else dispatch({ type: "SET_SESSION", session: {} });
  };
};

export { login, logout, exchangeToken, googleLogin };
