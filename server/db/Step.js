const conn = require("./conn");
const { Sequelize } = conn;
const { STRING, TEXT, ENUM } = Sequelize;

const Step = conn.define("step", {
  name: {
    type: STRING,
    allowNull: false,
  },
  //TODO: length validation?
  description: {
    type: TEXT,
  },
  type: {
    type: ENUM,
    values: ["select", "measurement"],
    allowNull: false,
  },
});

module.exports = Step;
