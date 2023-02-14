const Sequelize = require("sequelize");

const conn = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/dovin",
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: { rejectUnauthorized: true },
    },
  }
);

module.exports = conn;
