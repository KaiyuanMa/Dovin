const conn = require("./conn");
const { Sequelize } = conn;
const { UUID, UUIDV4, STRING, TEXT, DECIMAL } = Sequelize;

const Quote = conn.define("quote", {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  //TODO: allNull for costSum?
  costSum: {
    type: DECIMAL,
  },
});

module.exports = Quote;
