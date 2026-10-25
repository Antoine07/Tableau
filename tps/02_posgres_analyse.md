Le TP PostgreSQL + Tableau Desktop est prêt. Il est conçu pour être réalisé en binôme, avec une présentation orale et une analyse commerciale argumentée.

Télécharger le TP E-commerce complet — ZIP

Docker Compose, PostgreSQL, données, TP HTML/CSS, SQL et corrigés

## 1. Le jeu de données

J'ai créé une boutique de commerce électronique fictive avec une base relationnelle suffisamment riche pour travailler les jointures, les agrégations, les dates et la rentabilité.

# 1 800

Commandes

# 4 465

Lignes de vente

# 250

Clients

# 90

Produits

# 7

Tables SQL

# 2

Années (2024–2025)

Modèle relationnel simplifié

## 2. Les cinq questions du TP

| Question                        | Objectif SQL                  | Visualisation Tableau      |
| ------------------------------- | ----------------------------- | -------------------------- |
| 1. Ventes par région et segment | `WHERE`, `GROUP BY`, `SUM`    | Barres empilées            |
| 2. Ventes et rentabilité        | Agrégations, calcul de marge  | Comparaison ventes/marge   |
| 3. Évolution des ventes         | `DATE_TRUNC`, regroupements   | Courbes temporelles        |
| 4. Retours de commandes         | `JOIN`, `COUNT`, filtres      | Carte de chaleur           |
| 5. Décision commerciale         | `WITH`, jointures et synthèse | Tableau de bord interactif |

Les étudiants devront écrire leurs requêtes SQL, exploiter les résultats dans Tableau et expliquer leurs choix graphiques.

## 3. Installation guidée

Le fichier `INSTALL.md` explique toute la procédure. J'ai également inclus une version HTML mise en forme.

Pour démarrer, les étudiants lancent simplement :

```
docker compose up -d
```

PostgreSQL crée automatiquement les tables, importe les données et prépare deux vues SQL.

Ils se connectent ensuite depuis Tableau Desktop avec les paramètres fournis dans le guide. La connexion PostgreSQL et le SQL personnalisé sont officiellement pris en charge par Tableau Desktop.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://help.tableau.com\&sz=32)

Tableau

+1



## 4. Présentation en binôme

Chaque groupe prépare une restitution de 8 minutes : présentation des données, démonstration SQL, exploration du tableau de bord et recommandations commerciales.

L'archive contient également une grille d'évaluation sur 20 points et un dossier `corrections_formateur` avec les cinq requêtes de référence. Ce dossier est à retirer avant de distribuer le travail aux étudiants.

Vérification : j'ai contrôlé la structure des données, les références entre tables, les fichiers générés et l'intégrité de l'archive ZIP. Je n'ai pas pu exécuter PostgreSQL dans Docker ni tester la connexion réelle depuis Tableau dans cet environnement. Le premier démarrage devra donc être validé sur un ordinateur équipé de Docker Desktop.

Le TP constitue un prolongement naturel de votre cours : SQL pour préparer et interroger les données, Tableau pour les visualiser, puis analyse critique pour prendre une décision.