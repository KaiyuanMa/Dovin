const express = require("express");
const router = express.Router();
const { isLoggedIn, adminAccess } = require("./middleware");
const { Step } = require("../db");

//GET
router.get("/:stepId", async (req, res, next) => {
  try {
    const step = await Step.findByPk(req.params.stepId);
    res.send(step);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
