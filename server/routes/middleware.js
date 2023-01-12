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

const adminAccess = async (req, res, next) => {
  try {
    if (req.user.role !== "admin" || req.user.role !== "superAdmin")
      return res.status(403).json({ error: "No Access" });
    next();
  } catch (ex) {
    next(ex);
  }
};

module.exports = {
  isLoggedIn,
  adminAccess,
};
