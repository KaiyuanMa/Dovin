const express = require("express");
const router = express.Router();
const { isLoggedIn, adminAccess } = require("./middleware");
const { StepSet, Step } = require("../db");

//GET
router.get("/", async (req, res, next) => {
  try {
    const stepSets = await StepSet.findAll();
    res.send(stepSets);
  } catch (ex) {
    next(ex);
  }
});

router.get("/:stepSetId", async (req, res, next) => {
  try {
    const stepSet = await StepSet.findByPk(req.params.stepSetId);
    let currStep = await Step.findOne({ where: { stepSetId: stepSet.id } });
    let steps = [currStep.dataValues];
    while (currStep.stepId) {
      currStep = await Step.findByPk(currStep.stepId);
      steps.push(currStep.dataValues);
    }
    stepSet.dataValues.steps = steps;
    console.log(stepSet);
    res.send(stepSet);
  } catch (ex) {
    next(ex);
  }
});

//DELETE
router.delete(
  "/:stepSetId",
  isLoggedIn,
  adminAccess,
  async (req, res, next) => {
    try {
      const stepSet = await StepSet.findByPk(req.params.stepSetId);
      stepSet.destroy();
      res.sendStatus(202);
    } catch (ex) {
      next(ex);
    }
  }
);

//POST
router.post("/", isLoggedIn, adminAccess, async (req, res, next) => {
  try {
    const stepSet = await StepSet.create(req.body);
    res.send(stepSet);
  } catch (ex) {
    next(ex);
  }
});

//PUT
router.put("/:stepSetId", isLoggedIn, adminAccess, async (req, res, next) => {
  try {
    const stepSet = await StepSet.update(req.body, {
      where: { id: req.params.stepSetId },
    });
    res.send(stepSet);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;
