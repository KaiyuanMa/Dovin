const conn = require("./conn");
const { Sequelize } = conn;
const { UUID, UUIDV4, STRING, TEXT } = Sequelize;

const Step = conn.define("step", {
  name: {
    type: STRING,
    allowNull: false,
  },
  //TODO: length validation?
  description: {
    type: TEXT,
  },
});

module.exports = Step;
