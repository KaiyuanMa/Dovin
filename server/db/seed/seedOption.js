const { Option } = require("../index");

const seedOptions = async (steps) => {
  try {
    const options = [];
    for (let i = 0; i < steps.length; i++) {
      for (let j = 0; j < 2; j++) {
        const option = await Option.create({
          name: `${steps[i].name} Option${j}`,
        });
        options.push(option.dataValues);
      }
    }
    return options;
  } catch (ex) {
    console.log(ex);
  }
};

module.exports = seedOptions;
