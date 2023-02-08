const axios = require("axios");

const apiGetGuestQuote = (guestId) => {
  return axios.get(`/api/guestQuote/${guestId}`);
};

const apiGetAGuestQuote = (guestId, quoteId) => {
  return axios.get(`/api/guestQuote/${guestId}/${quoteId}`);
};

const apiDeleteGuestQuote = (guestId, quoteId) => {
  console.log(guestId, quoteId);
  return axios.delete(`/api/guestQuote/${guestId}/${quoteId}`);
};

const apiAddGuestQuote = (guestId, quote) => {
  return axios.post(`/api/guestQuote/${guestId}`, quote);
};

const apiGuestUpdateQuoteQuantity = (quoteId, quantity, guestId) => {
  return axios.put(
    `/api/guestQuote/changeQuantity/${quoteId}/${quantity}/${guestId}`
  );
};

export {
  apiGetGuestQuote,
  apiGetAGuestQuote,
  apiDeleteGuestQuote,
  apiAddGuestQuote,
  apiGuestUpdateQuoteQuantity,
};
