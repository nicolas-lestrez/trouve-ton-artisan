-- INSERT DES DONNEES POUR TROUVE TON ARTISAN

-- Insertion des catégories
INSERT INTO Categorie (id_categorie, nom) VALUES
(1, 'Alimentation'),
(2, 'Bâtiment'),
(3, 'Services'),
(4, 'Fabrication');

-- Insertion des spécialités
INSERT INTO Specialite (id_specialite, nom, id_categorie) VALUES
(1, 'Chocolatier', 1),
(2, 'Boulanger', 1),
(3, 'Boucher', 1),
(4, 'Traiteur', 1),
(5, 'Chauffagiste', 2),
(6, 'Electricien', 2),
(7, 'Menuisier', 2),
(8, 'Plombier', 2),
(9, 'Bijoutier', 4),
(10, 'Fleuriste', 3),
(11, 'Ferronier', 4),
(12, 'Couturier', 4),
(13, 'Toiletteur', 3),
(14, 'Webdesign', 3),
(15, 'Coiffeur', 3);

-- Insertion des villes
INSERT INTO Ville (id_ville, nom) VALUES
(1, 'Lyon'),
(2, 'Montélimar'),
(3, 'Evian'),
(4, 'Chamonix'),
(5, 'Bour-en-Bresse'),
(6, 'Vienne'),
(7, 'Aix-les-Bains'),
(8, 'Annonay'),
(9, 'le Puy-en-Velay'),
(10, 'Annecy'),
(11, 'Valence'),
(12, 'Romans-sur-Isère'),
(13, 'Saint-Priest'),
(14, 'Chambéry');

-- Insertion des artisans
INSERT INTO Artisan (id_artisan, nom, note, a_propos, email, top, url_site, id_ville, id_specialite) VALUES
(1, 'Chocolaterie Labbé', 4.9, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'chocolaterie-labbe@gmail.com', 1, 'https://chocolaterie-labbe.fr', 1, 1),
(2, 'Au pain chaud', 4.8, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'aupainchaud@hotmail.com', 1, NULL, 2, 2),
(3, 'Boucherie Dumont', 4.5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'boucherie.dumond@gmail.com', 0, NULL, 1, 3),
(4, 'Traiteur Truchon', 4.1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@truchon-traiteur.fr', 0, 'https://truchon-traiteur.fr', 1, 4),
(5, 'Orville Salmons', 5.0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'o-salmons@live.com', 1, NULL, 3, 5),
(6, 'Mont Blanc Eléctricité', 4.5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@mont-blanc-electricite.com', 0, 'https://mont-blanc-electricite.com', 4, 6),
(7, 'Boutot & fils', 4.7, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'boutot-menuiserie@gmail.com', 0, 'https://boutot-menuiserie.com', 5, 7),
(8, 'Vallis Bellemare', 4.0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'v.bellemare@gmail.com', 0, 'https://plomberie-bellemare.com', 6, 8),
(9, 'Claude Quinn', 4.2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'claude.quinn@gmail.com', 0, NULL, 7, 9),
(10, 'Le monde des fleurs', 4.6, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@le-monde-des-fleurs-annonay.fr', 0, 'https://le-monde-des-fleurs-annonay.fr', 8, 10),
(11, 'Ernest Carignan', 5.0, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'e-carigan@hotmail.com', 0, NULL, 9, 11),
(12, 'Amitee Lécuyer', 4.5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'a.amitee@hotmail.com', 0, 'https://lecuyer-couture.com', 10, 12),
(13, 'Valérie Laderoute', 4.5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'v-laredoute@gmail.com', 0, NULL, 11, 13),
(14, 'CM Graphisme', 4.4, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@cm-graphisme.com', 0, 'https://cm-graphisme.com', 11, 14),
(15, 'C''est sup''hair', 4.1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'sup-hair@gmail.com', 0, 'https://sup-hair.fr', 12, 15),
(16, 'Royden Charbonneau', 3.8, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'r.charbonneau@gmail.com', 0, NULL, 13, 15),
(17, 'Leala Dennis', 3.8, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'l.dennos@hotmail.fr', 0, 'https://coiffure-leala-chambery.fr', 14, 15);
