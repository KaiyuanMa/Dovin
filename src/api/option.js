const axios = require("axios");

//GET
const apiGetOption = (optionId) => {
  return axios.get(`/api/option/${optionId}`);
};

//DELETE
const apiDeleteOption = (optionId) => {
  return axios.delete(`/api/option/${optionId}`);
};

//POST
const apiAddOption = (option) => {
  return axios.post("/api/option", option);
};

//PUT
const apiUpdateOption = (optionId, params) => {
  return axios.put(`/api/option/${optionId}`, params);
};

export { apiGetOption, apiDeleteOption, apiAddOption, apiUpdateOption };
