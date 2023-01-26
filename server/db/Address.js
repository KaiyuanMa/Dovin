const conn = require("./conn");
const { Sequelize } = conn;
const { STRING, TEXT, ENUM, UUID, UUIDV4 } = Sequelize;

const Address = conn.define("address", {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
  streetAddress: {
    type: STRING,
    allowNull: false,
  },
  AptNumber: {
    type: STRING,
  },
  State: {
    type: STRING,
    allowNull: false,
  },
  Zip: {
    type: STRING,
    allowNull: false,
  },
});

module.exports = Address;
