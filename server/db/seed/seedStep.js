const { Step } = require("../index");

const seedStep = async (StepSet) => {
  try {
    const _Steps = [
      [
        {
          name: "Measurements",
          type: "measurement",
          description:
            "With only a few simple measurements our system will be able to create beautiful custom window treatments for you.",
        },
        {
          name: "Fabric",
          type: "select",
          description:
            "Choose from our exclusive designer fabrics. Our custom flat panel drapes are proudly made in the USA and backed by the best guarantee in the industry.",
        },
        {
          name: "Header",
          type: "select",
          description:
            "Choose from 12 distinct styles, handcrafted using our exclusive fabrics. Our custom drapes are proudly made in the USA and backed by the best guarantee in the industry. ",
          stepSetId: StepSet[0].id,
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
