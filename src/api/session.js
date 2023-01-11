const axios = require("axios");

const apiGetSessionUser = (token) => {
  return axios.get("/api/session", {
    headers: {
      authorization: token,
    },
  });
};

const apiSetSession = (credential) => {
  return axios.post("/api/session", credential);
};

const apiSignUp = (user) => {
  return axios.post("/api/session/signup", user);
};

export { apiGetSessionUser, apiSetSession, apiSignUp };
