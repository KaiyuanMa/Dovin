const axios = require("axios");

const checkout = (params) => {
  return axios.post("/create-checkout-session", params);
};

export { checkout };
