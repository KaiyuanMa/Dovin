const { Option } = require("../index");

const seedOptions = async (steps) => {
  try {
    const _Option = [
      [
        {
          name: "Window",
          description: "",
          stepId: steps[0].id,
          imageUrl: "https://dovin.s3.amazonaws.com/Static/img/1600x1600.png",
        },
        {
          name: "Door",
          description: "",
          stepId: steps[0].id,
          imageUrl: "https://dovin.s3.amazonaws.com/Static/img/1600x1600.png",
        },
        {
          name: "Flat Panel Drapes",
          description: "",
          stepId: steps[2].id,
          imageUrl: "https://dovin.s3.amazonaws.com/Static/img/1600x1600.png",
        },
        {
          name: "Pinch Pleat Drapes",
          description: "",
          stepId: steps[2].id,
          imageUrl: "https://dovin.s3.amazonaws.com/Static/img/1600x1600.png",
        },
        {
          name: "Grommet Drapes",
          description: "",
          stepId: steps[2].id,
          imageUrl: "https://dovin.s3.amazonaws.com/Static/img/1600x1600.png",
        },
        {
          name: "Ripple Fold Drapes",
          description: "",
          stepId: steps[2].id,
          imageUrl: "https://dovin.s3.amazonaws.com/Static/img/1600x1600.png",
        },
        {
          name: "Tailored Pleat Drapes",
          description: "",
          stepId: steps[2].id,
          imageUrl: "https://dovin.s3.amazonaws.com/Static/img/1600x1600.png",
        },
        {
          name: "Goblet Drapes",
          description: "",
          stepId: steps[2].id,
          imageUrl: "https://dovin.s3.amazonaws.com/Static/img/1600x1600.png",
        },
        {
          name: "Back Tab Drapes",
          description: "",
          stepId: steps[2].id,
          imageUrl: "https://dovin.s3.amazonaws.com/Static/img/1600x1600.png",
        },
        {
          name: "Inverted Pleat Drapes",
          description: "",
          stepId: steps[2].id,
          imageUrl: "https://dovin.s3.amazonaws.com/Static/img/1600x1600.png",
        },
        {
          name: "Rod Pocket Drapes",
          description: "",
          stepId: steps[2].id,
          imageUrl: "https://dovin.s3.amazonaws.com/Static/img/1600x1600.png",
        },
        {
          name: '3" Flange Rod Pocket',
          description: "",
          stepId: steps[2].id,
          imageUrl: "https://dovin.s3.amazonaws.com/Static/img/1600x1600.png",
        },
        {
          name: "Classic Tab Drapes",
          description: "",
          stepId: steps[2].id,
          imageUrl: "https://dovin.s3.amazonaws.com/Static/img/1600x1600.png",
        },
        {
          name: "Tie Top Drapes",
          description: "",
          stepId: steps[2].id,
          imageUrl: "https://dovin.s3.amazonaws.com/Static/img/1600x1600.png",
        },
        {
          name: "Woven Cotton - White",
          description: "",
          stepId: steps[1].id,
          imageUrl: "https://dovin.s3.amazonaws.com/Static/img/1600x1600.png",
        },
        {
          name: "Woven Cotton - Ivory",
          description: "",
          stepId: steps[1].id,
          imageUrl: "https://dovin.s3.amazonaws.com/Static/img/1600x1600.png",
        },
        {
          name: "Woven Cotton - Cement",
          description: "",
          stepId: steps[1].id,
          imageUrl: "https://dovin.s3.amazonaws.com/Static/img/1600x1600.png",
        },
        {
          name: "Woven Cotton - Sand",
          description: "",
          stepId: steps[1].id,
          imageUrl: "https://dovin.s3.amazonaws.com/Static/img/1600x1600.png",
        },
        {
          name: "Woven Cotton - Batik Blue",
          description: "",
          stepId: steps[1].id,
          imageUrl: "https://dovin.s3.amazonaws.com/Static/img/1600x1600.png",
        },
        {
          name: "Woven Cotton - Cactus",
          description: "",
          stepId: steps[1].id,
          imageUrl: "https://dovin.s3.amazonaws.com/Static/img/1600x1600.png",
        },
        {
          name: "Woven Cotton - Petal",
          description: "",
          stepId: steps[1].id,
          imageUrl: "https://dovin.s3.amazonaws.com/Static/img/1600x1600.png",
        },
        {
          name: "Woven Cotton - Stone Grey",
          description: "",
          stepId: steps[1].id,
          imageUrl: "https://dovin.s3.amazonaws.com/Static/img/1600x1600.png",
        },
        {
          name: "Woven Cotton - Deep Sea Blue",
          description: "",
          stepId: steps[1].id,
          imageUrl: "https://dovin.s3.amazonaws.com/Static/img/1600x1600.png",
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
