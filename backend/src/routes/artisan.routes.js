const express = require("express");
const router = express.Router();
const artisanController = require("../controllers/artisan.controller");

// /artisans
router.get("/", artisanController.getAllArtisans);

// /artisans/:id
router.get("/:id", artisanController.getArtisanById);

module.exports = router;
