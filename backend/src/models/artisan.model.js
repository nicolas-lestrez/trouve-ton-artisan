USE trouve_ton_artisan;


const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Artisan = sequelize.define(
    "Artisan",
    {
      id_artisan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nom: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      note: {
        type: DataTypes.DECIMAL(2, 1),
        allowNull: true,
      },
      a_propos: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      top: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      url_site: {
        type: DataTypes.STRING(250),
        allowNull: true,
      },
      id_ville: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_specialite: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "Artisan",
      timestamps: false,
    }
  );

  return Artisan;
};
