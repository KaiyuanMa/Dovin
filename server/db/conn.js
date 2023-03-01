const Sequelize = require("sequelize");

const conn = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/dovin",
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
    },
  }
);

module.exports = conn;
