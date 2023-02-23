const express = require("express");
const router = express.Router();
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const CLIENT_ID = process.env.GOOGLE_CLIENT_KEY;
const client = new OAuth2Client(CLIENT_ID);
const crypto = require("crypto");
const { User } = require("../db");
const axios = require("axios");

router.post("/google", async (req, res, next) => {
  try {
    const accessToken = req.body.token;
    const { data } = await axios.get(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const users = await User.findAll({ where: { email: data.email } });
    let user;
    console.log(users);
    if (users.length === 0) {
      const length = 12; // length of the password
      const chars =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let password = "";
      for (let i = 0; i < length; i++) {
        const index = crypto.randomInt(0, chars.length);
        password += chars[index];
      }
      user = await User.create({
        email: data.email,
        firstName: data.given_name,
        lastName: data.family_name,
        password: password,
      });
    } else user = users[0];
    console.log(user);
    res.send({ token: jwt.sign({ id: user.id }, process.env.JWT) });
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
