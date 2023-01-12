const conn = require("./conn");
const { Sequelize } = conn;
const { UUID, UUIDV4, STRING, TEXT } = Sequelize;

const StepSet = conn.define("stepSet", {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  //TODO: length validation?
  description: {
    type: TEXT,
  },
});

module.exports = StepSet;
