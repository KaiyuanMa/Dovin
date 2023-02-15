const axios = require("axios");

//TODO: Finish routes first

const apiGetQuoteItem = (quoteItemId) => {
  return axios.get(`/api/quoteItem/${quoteItemId}`);
};

// const apiDeleteQuoteItem = (quoteItemId) => {
//   return axios.delete(`/api/quoteItem/${quoteItemId}`);
// };

// const apiAddQuoteItem = (quoteItem) => {
//   return axios.post(`/api/quoteItem`, quoteItem);
// };

// const apiUpdateQuoteItem = (quoteItemId, params) => {
//   return axios.put(`/api/quoteItem/${quoteItemId}`, params);
// };

export {
  apiGetQuoteItem,
  apiDeleteQuoteItem,
  apiAddQuoteItem,
  apiUpdateQuoteItem,
};
