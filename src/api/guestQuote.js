const axios = require("axios");

const apiGetGuestQuote = (guestId) => {
  return axios.get(`/api/guestQuote/${guestId}`);
};

const apiDeleteGuestQuote = (guestId, quoteId) => {
  return axios.get(`/api/guestQuote/${guestId}/${quoteId}`);
};

const apiAddGuestQuote = (guestId, quote) => {
  return axios.post(`/api/guestQuote/${guestId}`, quote);
};

export { apiGetGuestQuote, apiDeleteGuestQuote, apiAddGuestQuote };
