# Trouve ton artisan

## Prototype Figma

[Lien du prototype](https://www.figma.com/design/jPTfEb6QPhLibxeyYipume/Trouve-ton-artisan?node-id=0-1)

## Presentation du projet

Trouve ton artisan est une application web permettant de rechercher des artisans situes en region Auvergne-Rhone-Alpes.
Le projet comporte un backend en Node.js (Express) avec une base de donnees, et un frontend en React developpe avec Vite.

L objectif est d afficher des artisans selon leur categorie, leur specialite, leur ville, et de permettre l acces a une fiche detaillee avec un formulaire de contact.

Le projet repose sur un design concu sur Figma et implemente la police Graphik, des composants reutilisables, ainsi qu une integration responsive.

## Objectifs pedagogiques

Ce projet a ete realise dans le cadre d un exercice complet visant a pratiquer :

- Creation d une API REST avec Express
- Structure MVC (models, routes, controllers)
- Requetes SQL avec Sequelize
- Relations entre tables (Artisan, Ville, Specialite, Categorie)
- Creation d un front en React avec Vite
- Utilisation de React Router pour le routing
- Gestion des appels API et des etats avec hooks
- Integration graphique responsive a partir d un prototype Figma
- Gestion d un repository Git versionne

## Stack technique

### Frontend

- React (Vite)
- React Router
- Bootstrap 5
- SCSS personnalise
- Polices Graphik (OTF) integrees localement
- Google Maps Embedded (iframe)

### Backend

- Node.js / Express
- Sequelize
- Base de donnees relationnelle
- dotenv

## Fonctionnalites developpees

### Frontend

**Page d accueil**

- Mise en avant du fonctionnement de l application
- Bloc Artisans du mois (selection aleatoire depuis l API)
- Cartes Google Maps basees sur la ville
- Affichage des notes sous forme d etoiles
- Liste des artisans filtree par categorie

**Fiche artisan detaillee**

- Informations completes sur l artisan
- Formulaire de contact
- Carte Google Maps

**Header responsive**

- Menu mobile
- Logo cliquable vers l accueil
- Navigation par categorie
- Barre de recherche (en cours)

**Footer**

- Logo
- Liens legaux
- Adresse cliquable vers Google Maps
- Numero cliquable pour telephone

### Backend

**CRUD en lecture sur les artisans**

- Route de liste filtrable par categorie :  
  GET /artisans?categorie=...

- Route de detail :  
  GET /artisans/:id

**Relations**

- Artisan vers Ville
- Artisan vers Specialite vers Categorie
