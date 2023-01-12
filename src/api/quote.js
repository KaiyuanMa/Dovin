const axios = require("axios");

//GET
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

export { apiGetQuote, apiDeleteQuote, apiAddQuote, apiUpdateQuote };
