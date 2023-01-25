const { Option } = require("../index");

const seedOptions = async (steps) => {
  try {
    const _Option = [
      [
        {
          name: "Flat Panel Drapes",
          description: "",
          stepId: steps[4].id,
        },
        {
          name: "Pinch Pleat Drapes",
          description: "",
          stepId: steps[4].id,
        },
        {
          name: "Grommet Drapes",
          description: "",
          stepId: steps[4].id,
        },
        {
          name: "Ripple Fold Drapes",
          description: "",
          stepId: steps[4].id,
        },
        {
          name: "Tailored Pleat Drapes",
          description: "",
          stepId: steps[4].id,
        },
        {
          name: "Goblet Drapes",
          description: "",
          stepId: steps[4].id,
        },
        {
          name: "Back Tab Drapes",
          description: "",
          stepId: steps[4].id,
        },
        {
          name: "Inverted Pleat Drapes",
          description: "",
          stepId: steps[4].id,
        },
        {
          name: "Rod Pocket Drapes",
          description: "",
          stepId: steps[4].id,
        },
        {
          name: '3" Flange Rod Pocket',
          description: "",
          stepId: steps[4].id,
        },
        {
          name: "Classic Tab Drapes",
          description: "",
          stepId: steps[4].id,
        },
        {
          name: "Tie Top Drapes",
          description: "",
          stepId: steps[4].id,
        },
        {
          name: "Woven Cotton - White",
          description: "",
          stepId: steps[3].id,
        },
        {
          name: "Woven Cotton - Ivory",
          description: "",
          stepId: steps[3].id,
        },
        {
          name: "Woven Cotton - Cement",
          description: "",
          stepId: steps[3].id,
        },
        {
          name: "Woven Cotton - Sand",
          description: "",
          stepId: steps[3].id,
        },
        {
          name: "Woven Cotton - Batik Blue",
          description: "",
          stepId: steps[3].id,
        },
        {
          name: "Woven Cotton - Cactus",
          description: "",
          stepId: steps[3].id,
        },
        {
          name: "Woven Cotton - Petal",
          description: "",
          stepId: steps[3].id,
        },
        {
          name: "Woven Cotton - Stone Grey",
          description: "",
          stepId: steps[3].id,
        },
        {
          name: "Woven Cotton - Deep Sea Blue",
          description: "",
          stepId: steps[3].id,
        },
      ],
    ];
    for (let i = 0; i < _Option.length; i++) {
      for (let j = 0; j < _Option[i].length; j++) {
        const option = await Option.create(_Option[i][j]);
        // options.push(option.dataValues);
      }
    }
    // return options;
  } catch (ex) {
    console.log(ex);
  }
};

module.exports = seedOptions;
