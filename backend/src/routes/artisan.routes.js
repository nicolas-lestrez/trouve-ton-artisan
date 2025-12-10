// backend/src/routes/artisan.routes.js
const express = require("express");
const router = express.Router();

const { Artisan, Ville, Specialite, Categorie } = require("../models");

/**
 * Liste des artisans, avec filtre optionnel ?categorie=...
 */
router.get("/", async (req, res) => {
  const { categorie } = req.query;

  try {
    let artisans = await Artisan.findAll({
      include: [
        { model: Ville, as: "Ville" },
        {
          model: Specialite,
          as: "Specialite",
          include: [{ model: Categorie, as: "Categorie" }],
        },
      ],
      order: [["nom", "ASC"]],
    });

    if (categorie) {
      artisans = artisans.filter((artisan) => {
        const catName = artisan.Specialite?.Categorie?.nom;
        return catName === categorie; // "Bâtiment", "Services", etc.
      });
    }

    res.json(artisans);
  } catch (error) {
    console.error("Erreur dans GET /artisans :", error);
    res.status(500).json({
      message: "Erreur serveur lors du chargement des artisans",
      error: error.message,
    });
  }
});

/**
 * GET /artisans/:id
 */
router.get("/:id", async (req, res) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id, {
      include: [
        { model: Ville, as: "Ville" },
        {
          model: Specialite,
          as: "Specialite",
          include: [{ model: Categorie, as: "Categorie" }],
        },
      ],
    });

    if (!artisan) {
      return res.status(404).json({ message: "Artisan non trouvé" });
    }

    res.json(artisan);
  } catch (error) {
    console.error("Erreur dans GET /artisans/:id :", error);
    res.status(500).json({
      message: "Erreur serveur lors du chargement de l'artisan",
      error: error.message,
    });
  }
});

module.exports = router;
