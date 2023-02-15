const express = require("express");
const router = express.Router();
const { isLoggedIn, adminAccess } = require("./middleware");
const { Option } = require("../db");

//GET
router.get("/", isLoggedIn, adminAccess, async (req, res, next) => {
  try {
    const options = await Option.findAll();
    res.send(options);
  } catch (ex) {
    next(ex);
  }
});

router.get("/stepOptions/:stepId", async (req, res, next) => {
  try {
    const options = await Option.findAll({
      where: { stepId: req.params.stepId },
    });
    res.send(options);
  } catch (ex) {
    next(ex);
  }
});

router.get("/:optionId", async (req, res, next) => {
  try {
    const option = await Option.findByPk(req.params.optionId);
    res.send(option);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
