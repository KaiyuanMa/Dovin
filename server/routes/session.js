const express = require("express");
const router = express.Router();
const { User } = require("../db");
const { isLoggedIn } = require("./middleware");

router.post("/", async (req, res, next) => {
  try {
    const credentials = {
      email: req.body.email,
      password: req.body.password,
    };
    res.send({ token: await User.authenticate(credentials) });
  } catch (ex) {
    next(ex);
  }
});

router.get("/", isLoggedIn, async (req, res, next) => {
  try {
    res.send(req.user);
  } catch (ex) {
    next(ex);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const users = await User.findAll({
      where: {
        email: req.body.email,
      },
    });
    if (users.length === 0) {
      await User.create(req.body);
      const credentials = {
        username: req.body.username,
        password: req.body.password,
      };
      res.send({ token: await User.authenticate(credentials) });
    } else {
      res.send({ type: "error", massage: "username exist" });
    }
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
