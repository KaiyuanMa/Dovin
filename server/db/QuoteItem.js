const conn = require("./conn");
const { Sequelize } = conn;
const { UUID, UUIDV4, STRING, TEXT } = Sequelize;

const QuoteItem = conn.define("quoteItem", {});

module.exports = QuoteItem;
