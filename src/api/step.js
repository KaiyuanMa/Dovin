const axios = require("axios");

//GET
const apiGetStep = (stepId) => {
  return axios.get(`/api/step/${stepId}`);
};

export { apiGetStep };
