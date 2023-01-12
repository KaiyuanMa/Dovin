const axios = require("axios");

//GET
const apiGetAllStepSets = () => {
  return axios.get("/api/stepSet");
};

const apiGetStepSet = (stepSetId) => {
  return axios.get(`/api/stepSet/${stepSetId}`);
};

//DELETE
const apiDeleteStepSet = (stepSetId) => {
  return axios.delete(`/api/stepSet/${stepSetId}`);
};

//POST
const apiAddStepSet = (stepSet) => {
  return axios.post("/api/stepSet", stepSet);
};

export { apiGetAllStepSets, apiGetStepSet, apiDeleteStepSet, apiAddStepSet };
