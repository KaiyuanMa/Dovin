const axios = require("axios");

const apioAuthGoogle = (body) => {
  return axios.post("/api/oAuth/google", body);
};

export { apioAuthGoogle };
