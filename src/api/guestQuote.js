const axios = require("axios");

const apiGetGuestQuote = (guestId) => {
  return axios.get(`/api/guestQuote/${guestId}`);
};

const apiDeleteGuestQuote = (guestId, quoteId) => {
  console.log(guestId, quoteId);
  return axios.delete(`/api/guestQuote/${guestId}/${quoteId}`);
};

const apiAddGuestQuote = (guestId, quote) => {
  return axios.post(`/api/guestQuote/${guestId}`, quote);
};

export { apiGetGuestQuote, apiDeleteGuestQuote, apiAddGuestQuote };
