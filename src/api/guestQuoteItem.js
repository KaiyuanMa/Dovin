const axios = require("axios");

const apiGetGuestQI = (guestId, quoteItemId) => {
  return axios.get(`/api/guestQuoteItem/${guestId}/${quoteItemId}`);
};

const apiDeleteGuestQI = (guestId, quoteItemId) => {
  return axios.get(`/api/guestQuoteItem/${guestId}/${quoteItemId}`);
};

const apiAddGuestQI = (guestId, QI) => {
  return axios.post(`/api/guestQuoteItem/${guestId}`, QI);
};

export { apiGetGuestQI, apiDeleteGuestQI, apiAddGuestQI };
