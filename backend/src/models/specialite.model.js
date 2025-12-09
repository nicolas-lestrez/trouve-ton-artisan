const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Specialite = sequelize.define(
    "Specialite",
    {
      id_specialite: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nom: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      id_categorie: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "Specialite",
      timestamps: false,
    }
  );

  return Specialite;
};
