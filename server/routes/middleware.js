const { User } = require("../db");

const isLoggedIn = async (req, res, next) => {
  try {
    req.user = await User.findByToken(req.headers.authorization);
  } catch (ex) {
    next(ex);
  }
};

module.exports = {
  isLoggedIn,
};
