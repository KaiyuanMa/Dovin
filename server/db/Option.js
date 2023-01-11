const conn = require("./conn");
const { Sequelize } = conn;
const { UUID, UUIDV4, STRING, TEXT } = Sequelize;

const Option = conn.define("option", {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  name: {
    type: STRING,
    allNull: false,
  },
  description: {
    type: TEXT,
  },
  //TODO: where to store img?
});

module.exports = Option;
