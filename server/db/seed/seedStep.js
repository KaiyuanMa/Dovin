const { Step } = require("../index");

const seedStep = async (StepSet) => {
  try {
    const _Steps = [
      [
        {
          name: "Lorem ipsum",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue est, porttitor eget ex sit amet, fringilla aliquam erat.",
        },
        {
          name: "Dolor sit amet",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue est, porttitor eget ex sit amet, fringilla aliquam erat.",
        },
        {
          name: "Cras augue est",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue est, porttitor eget ex sit amet, fringilla aliquam erat.",
        },
        {
          name: "Fringilla aliquam",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue est, porttitor eget ex sit amet, fringilla aliquam erat.",
        },
        {
          name: "Nulla a ultrices",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras augue est, porttitor eget ex sit amet, fringilla aliquam erat.",
          stepSetId: StepSet[0].id,
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
          stepSetId: StepSet[1].id,
        },
      ],
    ];

    let steps = [];
    for (let i = 0; i < _Steps.length; i++) {
      let idAfter;
      for (let j = 0; j < _Steps[i].length; j++) {
        if (j > 0) {
          _Steps[i][j].stepId = idAfter;
        }
        const currStep = await Step.create(_Steps[i][j]);
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
