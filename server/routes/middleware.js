const { User } = require("../db");

const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    req.user = await User.findByToken(token);
    next();
  } catch (ex) {
    next(ex);
  }
};

module.exports = {
  isLoggedIn,
};
