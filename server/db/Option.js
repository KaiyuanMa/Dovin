const conn = require("./conn");
const { Sequelize } = conn;
const { UUID, UUIDV4, STRING, TEXT } = Sequelize;

const Option = conn.define("option", {
  name: {
    type: STRING,
    allNull: false,
  },
  description: {
    type: TEXT,
  },
  imageUrl: {
    type: STRING,
    allNull: false,
  },
  //TODO: where to store img?
});

module.exports = Option;
