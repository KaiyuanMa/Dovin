const { Step } = require("../index");

const _Steps = [
  [
    {
      name: "A5",
    },
    {
      name: "A4",
    },
    {
      name: "A3",
    },
    {
      name: "A2",
    },
    {
      name: "A1",
    },
  ],
  [
    {
      name: "B5",
    },
    {
      name: "B4",
    },
    {
      name: "B3",
    },
    {
      name: "B2",
    },
    {
      name: "B1",
    },
  ],
];

const seedStep = async () => {
  try {
    let steps = [];
    for (let i = 0; i < _Steps.length; i++) {
      let idAfter;
      for (let j = 0; j < _Steps[i].length; j++) {
        if (j > 0) {
          _Steps[i][j].stepId = idAfter;
        }
        const currStep = await Step.create(_Steps[i][j]);
        console.log(currStep.dataValues);
        steps.push(currStep.dataValues);
        idAfter = currStep.id;
      }
    }
    return steps;
  } catch (ex) {
    console.log(ex);
  }
};

module.exports = seedStep;
