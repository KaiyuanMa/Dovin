const axios = require("axios");

const apiGetAddresses = () => {
  return axios.get("/api/address/");
};

const apiGetAAddress = (addressId) => {
  return axios.get(`/api/address/${addressId}`);
};

const apiDeleteAddress = (addressId) => {
  return axios.delete(`/api/address/${addressId}`);
};

const apiAddAddress = (address) => {
  return axios.post("/api/address", address);
};

const apiUpdateAddress = (addressId, params) => {
  return axios.put(`/api/address/${addressId}`, params);
};

export {
  apiGetAddresses,
  apiGetAAddress,
  apiDeleteAddress,
  apiAddAddress,
  apiUpdateAddress,
};
