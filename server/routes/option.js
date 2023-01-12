const express = require("express");
const router = express.Router();
const { isLoggedIn, adminAccess } = require("./middleware");
const { Option } = require("../db");

//GET
router.get("/:optionId", isLoggedIn, async (req, res, next) => {
  try {
    const option = await Option.findByPk(req.params.optionId);
    res.send(option);
  } catch (ex) {
    next(ex);
  }
});

//DELETE
router.delete("/:optionId", isLoggedIn, adminAccess, async (req, res, next) => {
  try {
    const option = await Option.findByPk(req.params.optionId);
    option.destroy();
    res.sendStatus(202);
  } catch (ex) {
    next(ex);
  }
});

//POST
router.post("/", isLoggedIn, adminAccess, async (req, res, next) => {
  try {
    const option = await Option.create(req.body);
    res.send(option);
  } catch (ex) {
    next(ex);
  }
});

//PUT
router.put("/:optionId", isLoggedIn, adminAccess, async (req, res, next) => {
  try {
    const option = await Option.update(req.body, {
      where: { id: req.params.optionId },
    });
    res.send(option);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
