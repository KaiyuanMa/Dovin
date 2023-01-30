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
    console.log(ex);
    next(ex);
  }
});

router.get("/", isLoggedIn, async (req, res, next) => {
  res.send(req.user);
});

router.post("/signup", async (req, res, next) => {
  try {
    console.log(req.body);
    const users = await User.findAll({
      where: {
        email: req.body.email,
      },
    });
    if (users.length === 0) {
      await User.create(req.body);
      const credentials = {
        email: req.body.email,
        password: req.body.password,
      };
      res.send(credentials);
    } else {
      return res.status(409).json({ message: "Email already in use." });
    }
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
