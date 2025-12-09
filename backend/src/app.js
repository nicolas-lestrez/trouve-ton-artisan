const express = require("express");
const cors = require("cors");
const artisanRoutes = require("./routes/artisan.routes");
const categorieRoutes = require("./routes/categorie.routes");
const artisanController = require("./controllers/artisan.controller");

const app = express();

app.use(cors());
app.use(express.json());

// Routes principales
app.use("/artisans", artisanRoutes);
app.use("/categories", categorieRoutes);

// Route artisan du mois à la racine demandée dans le brief
app.get("/artisans-du-mois", artisanController.getArtisansDuMois);

// Petit test racine
app.get("/", (req, res) => {
  res.json({ message: "API Trouve Ton Artisan : OK" });
});

module.exports = app;
