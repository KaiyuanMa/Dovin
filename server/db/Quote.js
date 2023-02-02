const conn = require("./conn");
const { Sequelize } = conn;
const { UUID, UUIDV4, STRING, TEXT, DECIMAL, BOOLEAN } = Sequelize;

const Quote = conn.define("quote", {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  //TODO: allowNull for costSum?
  costSum: {
    type: DECIMAL,
  },
  isCart: {
    type: BOOLEAN,
  },
  isGuest: {
    type: BOOLEAN,
  },
});

module.exports = Quote;
