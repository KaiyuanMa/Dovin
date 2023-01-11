const express = require("express");
const router = express.Router();
const { isLoggedIn } = require("./middleware");
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
//TODO: admin only
router.delete("/:optionId", isLoggedIn, async (req, res, next) => {
  try {
    const option = await Option.findByPk(req.params.optionId);
    option.destroy();
    res.sendStatus(202);
  } catch (ex) {
    next(ex);
  }
});

//POST
//TODO: admin only
router.post("/", isLoggedIn, async (req, res, next) => {
  try {
    const option = await Option.create(req.body);
    res.send(option);
  } catch (ex) {
    next(ex);
  }
});

//PUT
//TODO: admin only
router.put("/:optionId", isLoggedIn, async (req, res, next) => {
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
