const conn = require("./conn");
const { Sequelize } = conn;
const { STRING } = Sequelize;

const OrderStatus = conn.define("orderStatus", {
  name: {
    type: STRING,
  },
});

module.exports = OrderStatus;
