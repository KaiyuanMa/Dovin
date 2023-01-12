const axios = require("axios");

const apiGetSessionUser = () => {
  return axios.get("/api/session");
};

const apiSetSession = (credential) => {
  return axios.post("/api/session", credential);
};

const apiSignUp = (user) => {
  return axios.post("/api/session/signup", user);
};

export { apiGetSessionUser, apiSetSession, apiSignUp };
