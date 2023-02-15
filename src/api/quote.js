const axios = require("axios");

//GET
const apiGetUserQuotes = () => {
  return axios.get("/api/quote");
};

const apiGetUserOrders = () => {
  return axios.get("/api/quote/order");
};

const apiGetUserCarts = () => {
  return axios.get("/api/quote/cart");
};

const apiGetQuote = (quoteId) => {
  return axios.get(`/api/quote/${quoteId}`);
};

//DELETE
const apiDeleteQuote = (quoteId) => {
  return axios.delete(`/api/quote/${quoteId}`);
};

//POST
const apiAddQuote = (quote) => {
  return axios.post("/api/quote/", quote);
};

//PUT
const apiUpdateQuantity = (quoteId, quantity) => {
  return axios.put(`/api/quote/changeQuantity/${quoteId}/${quantity}`);
};

const apiSyncQuotes = (guestId) => {
  return axios.put(`/api/quote/syncGuest/${guestId}`);
};

export {
  apiGetUserQuotes,
  apiGetUserOrders,
  apiGetUserCarts,
  apiGetQuote,
  apiDeleteQuote,
  apiAddQuote,
  apiSyncQuotes,
  apiUpdateQuantity,
};
