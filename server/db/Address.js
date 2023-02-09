const conn = require("./conn");
const { Sequelize } = conn;
const { STRING, TEXT, ENUM, UUID, UUIDV4 } = Sequelize;

const Address = conn.define("address", {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  NickName: {
    type: STRING,
    allowNull: false,
  },
  FirstName: {
    type: STRING,
    allowNull: false,
  },
  LastName: {
    type: STRING,
    allowNull: false,
  },
  Address1: {
    type: STRING,
    allowNull: false,
  },
  Address2: {
    type: STRING,
  },
  State: {
    type: STRING,
    allowNull: false,
  },
  City: {
    type: STRING,
    allowNull: false,
  },
  Zip: {
    type: STRING,
    allowNull: false,
  },
  Phone: {
    type: STRING,
    allowNull: false,
  },
});

module.exports = Address;
