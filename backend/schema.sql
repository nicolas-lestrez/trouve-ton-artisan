-- SCRIPT DE CREATION DE LA BASE DE DONNEES
-- trouve ton artisan

DROP DATABASE IF EXISTS trouve_ton_artisan;
CREATE DATABASE trouve_ton_artisan DEFAULT CHARACTER SET utf8mb4;
USE trouve_ton_artisan;

-- TABLE Categorie
CREATE TABLE Categorie (
  id_categorie INT PRIMARY KEY,
  nom VARCHAR(150) NOT NULL
);

-- TABLE Specialite
CREATE TABLE Specialite (
  id_specialite INT PRIMARY KEY,
  nom VARCHAR(150) NOT NULL,
  id_categorie INT NOT NULL,
  CONSTRAINT fk_specialite_categorie
    FOREIGN KEY (id_categorie) REFERENCES Categorie(id_categorie)
);

-- TABLE Ville
CREATE TABLE Ville (
  id_ville INT PRIMARY KEY,
  nom VARCHAR(150) NOT NULL
);

-- TABLE Artisan
CREATE TABLE Artisan (
  id_artisan INT PRIMARY KEY,
  nom VARCHAR(150) NOT NULL,
  note DECIMAL(2,1),
  a_propos TEXT,
  email VARCHAR(200),
  top BOOLEAN,
  url_site VARCHAR(255),
  id_ville INT NOT NULL,
  id_specialite INT NOT NULL,
  CONSTRAINT fk_artisan_ville
    FOREIGN KEY (id_ville) REFERENCES Ville(id_ville),
  CONSTRAINT fk_artisan_specialite
    FOREIGN KEY (id_specialite) REFERENCES Specialite(id_specialite)
);
