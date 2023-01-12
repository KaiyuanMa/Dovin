const express = require("express");
const router = express.Router();
const { isLoggedIn, adminAccess } = require("./middleware");
const { Step } = require("../db");

//GET
router.get("/:stepId", isLoggedIn, async (req, res, next) => {
  try {
    const step = await Step.findByPk(req.params.stepId);
    res.send(step);
  } catch (ex) {
    next(ex);
  }
});

//DELETE
router.delete("/:stepId", isLoggedIn, adminAccess, async (req, res, next) => {
  try {
    const step = await Step.findByPk(req.params.stepId);
    step.destroy();
    res.sendStatus(202);
  } catch (ex) {
    next(ex);
  }
});

//POST
router.post("/", isLoggedIn, adminAccess, async (req, res, next) => {
  try {
    const step = await Step.create(req.body);
    res.send(step);
  } catch (ex) {
    next(ex);
  }
});

//PUT
router.put("/:stepId", isLoggedIn, adminAccess, async (req, res, next) => {
  try {
    const step = await Step.update(req.body, {
      where: { id: req.params.stepId },
    });
    res.send(step);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
