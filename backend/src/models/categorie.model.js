const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Categorie = sequelize.define(
    "Categorie",
    {
      id_categorie: {
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
      tableName: "Categorie",
      timestamps: false,
    }
  );

  return Categorie;
};
