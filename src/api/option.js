const axios = require("axios");

//GET
const apiGetAllOptions = () => {
  return axios.get("/api/option");
};

const apiGetStepOptions = (stepId) => {
  return axios.get(`/api/option/stepOptions/${stepId}`);
};

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

export {
  apiGetAllOptions,
  apiGetStepOptions,
  apiGetOption,
  apiDeleteOption,
  apiAddOption,
  apiUpdateOption,
};
