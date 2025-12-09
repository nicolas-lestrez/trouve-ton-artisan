const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Ville = sequelize.define(
    "Ville",
    {
      id_ville: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nom: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
    },
    {
      tableName: "Ville",
      timestamps: false,
    }
  );

  return Ville;
};
