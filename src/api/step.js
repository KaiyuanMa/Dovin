const axios = require("axios");

//GET
const apiGetStep = (stepId) => {
  return axios.get(`/api/step/${stepId}`);
};

//DELETE
const apiDeleteStep = (stepId) => {
  return axios.delete(`/api/step/${stepId}`);
};

//POST
const apiAddStep = (step) => {
  return axios.post("/api/step", step);
};

//PUT
const apiUpdateStep = (stepId, param) => {
  return axios.put(`/api/step/${stepId}`, param);
};

export { apiGetStep, apiDeleteStep, apiAddStep, apiUpdateStep };
