const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME, // trouve_ton_artisan
  process.env.DB_USER, // root (ou autre)
  process.env.DB_PASSWORD, // ton mdp MySQL
  {
    host: process.env.DB_HOST || "localhost",
    dialect: process.env.DB_DIALECT || "mysql",
    logging: false, // met true si tu veux voir les requêtes dans la console
    define: {
      timestamps: false, // important : on n'a pas createdAt/updatedAt dans nos tables
    },
  }
);

module.exports = sequelize;
