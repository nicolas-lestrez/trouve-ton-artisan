const sequelize = require("../config/database"); // instance Sequelize
const CategorieModel = require("./categorie.model");
const SpecialiteModel = require("./specialite.model");
const VilleModel = require("./ville.model");
const ArtisanModel = require("./artisan.model");

// Initialisation des modèles
const Categorie = CategorieModel(sequelize);
const Specialite = SpecialiteModel(sequelize);
const Ville = VilleModel(sequelize);
const Artisan = ArtisanModel(sequelize);

// Associations

// 1 Categorie -> n Specialites
Categorie.hasMany(Specialite, {
  foreignKey: "id_categorie",
});
Specialite.belongsTo(Categorie, {
  foreignKey: "id_categorie",
});

// 1 Ville -> n Artisans
Ville.hasMany(Artisan, {
  foreignKey: "id_ville",
});
Artisan.belongsTo(Ville, {
  foreignKey: "id_ville",
});

// 1 Specialite -> n Artisans
Specialite.hasMany(Artisan, {
  foreignKey: "id_specialite",
});
Artisan.belongsTo(Specialite, {
  foreignKey: "id_specialite",
});

module.exports = {
  sequelize,
  Categorie,
  Specialite,
  Ville,
  Artisan,
};
