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

export { apiGetAllOptions, apiGetStepOptions, apiGetOption };
