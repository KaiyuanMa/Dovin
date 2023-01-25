const { StepSet } = require("../index");

const _StepSets = [
  {
    name: "Custom Drapes",
  },
  {
    name: "SetB",
  },
];

const seedStepSet = async () => {
  try {
    const stepSets = await Promise.all(
      _StepSets.map((stepSet) => StepSet.create(stepSet))
    );
    return stepSets;
  } catch (ex) {
    console.log(ex);
  }
};

module.exports = seedStepSet;
