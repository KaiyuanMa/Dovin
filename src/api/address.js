const axios = require("axios");

const apiAdminGetAddresses = () => {
  return axios.get("/api/address/admin");
};

const apiGetAddresses = () => {
  return axios.get("/api/address/");
};

const apiAdminDeleteAddress = (addressId) => {
  return axios.delete(`/api/address/admin/${addressId}`);
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
  apiAdminGetAddresses,
  apiGetAddresses,
  apiAdminDeleteAddress,
  apiDeleteAddress,
  apiAddAddress,
  apiUpdateAddress,
};
