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
const apiUpdateQuote = (quoteId, param) => {
  return axios.put(`/api/quote/${quoteId}`, param);
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
  apiUpdateQuote,
  apiSyncQuotes,
};
