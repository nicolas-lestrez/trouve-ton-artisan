const { Categorie } = require("../models");

// GET /categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Categorie.findAll({
      order: [["nom", "ASC"]],
    });

    res.json(categories);
  } catch (error) {
    console.error("Erreur /categories :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
