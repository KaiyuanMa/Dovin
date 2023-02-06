const conn = require("./conn");
const { Sequelize } = conn;
const { UUID, UUIDV4, STRING, INTEGER, DECIMAL, BOOLEAN } = Sequelize;

const Quote = conn.define("quote", {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  //TODO: allowNull for costSum?
  cost: {
    type: DECIMAL(10, 2),
    //TODO: fix fake default
    defaultValue: 1000,
  },
  isCart: {
    type: BOOLEAN,
  },
  quantity: {
    type: INTEGER,
    defaultValue: 1,
  },
  guestId: {
    type: STRING,
  },
});

module.exports = Quote;
