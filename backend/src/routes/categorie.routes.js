const express = require("express");
const router = express.Router();
const categorieController = require("../controllers/categorie.controller");

// /categories
router.get("/", categorieController.getAllCategories);

module.exports = router;
