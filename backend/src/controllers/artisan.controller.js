const { Artisan, Ville, Specialite, Categorie } = require("../models");

// GET /artisans (+ filtre ?categorie=...)
exports.getAllArtisans = async (req, res) => {
  try {
    const { categorie } = req.query;

    // filtre éventuel sur la catégorie
    let categorieFilter = null;
    if (categorie) {
      if (!isNaN(Number(categorie))) {
        // ?categorie=2  → par id_categorie
        categorieFilter = { id_categorie: Number(categorie) };
      } else {
        // ?categorie=Alimentation  → par nom
        categorieFilter = { nom: categorie };
      }
    }

    const specialiteInclude = {
      model: Specialite,
      include: [Categorie],
    };

    if (categorieFilter) {
      // on filtre au niveau de la catégorie
      specialiteInclude.include[0].where = categorieFilter;
    }

    const artisans = await Artisan.findAll({
      include: [{ model: Ville }, specialiteInclude],
      order: [["nom", "ASC"]],
    });

    res.json(artisans);
  } catch (error) {
    console.error("Erreur /artisans :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// GET /artisans/:id
exports.getArtisanById = async (req, res) => {
  try {
    const { id } = req.params;

    const artisan = await Artisan.findByPk(id, {
      include: [
        { model: Ville },
        {
          model: Specialite,
          include: [Categorie],
        },
      ],
    });

    if (!artisan) {
      return res.status(404).json({ error: "Artisan non trouvé" });
    }

    res.json(artisan);
  } catch (error) {
    console.error("Erreur /artisans/:id :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// GET /artisans-du-mois
exports.getArtisansDuMois = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      where: { top: true }, // flag top = 1
      include: [
        { model: Ville },
        {
          model: Specialite,
          include: [Categorie],
        },
      ],
      order: [["note", "DESC"]],
      limit: 3,
    });

    res.json(artisans);
  } catch (error) {
    console.error("Erreur /artisans-du-mois :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
