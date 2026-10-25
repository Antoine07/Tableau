# TP 0 — Découvrir Tableau et explorer les données d'un hypermarché

**Durée : 35 à 40 minutes**  
**Niveau : débutant**  
**Fichier :** `sample_-_superstore.xls`

## Objectif

Vous êtes analyste de données pour une chaîne de magasins. Votre responsable souhaite comprendre l'activité commerciale : les ventes, les produits et les retours de commandes.

Vous allez découvrir comment Tableau permet de connecter des données, de les organiser et de produire une première visualisation.

## Étape 1 — Découvrir les données 

1. Lancez Tableau Desktop.
2. Dans **Connexion**, sélectionnez **Microsoft Excel**.
3. Ouvrez le fichier `sample_-_superstore.xls`.
4. Observez les feuilles disponibles dans le fichier.

Dans la version habituelle de Sample Superstore, on retrouve trois tables :

| Table | Contenu |
|---|---|
| Orders | Commandes, clients, produits, ventes, bénéfices |
| Returns | Commandes ayant fait l'objet d'un retour |
| People | Responsables associés aux régions |

**Questions :**

- Quelle table contient les transactions commerciales ?
- Où trouve-t-on le chiffre d'affaires ?
- Quelle table permet d'identifier les commandes retournées ?
- Pourquoi les informations sont-elles réparties dans plusieurs tables ?

**À retenir :** une source Excel peut contenir plusieurs tables qui décrivent des aspects complémentaires de l'activité.

## Étape 2 — Comprendre les relations entre tables 

Dans l'onglet **Source de données** :

1. Faites glisser **Orders** dans la zone centrale.
2. Faites glisser **Returns** à côté de Orders.
3. Observez la relation proposée par Tableau.
4. Vérifiez que les deux tables sont reliées par `Order ID`.
5. Ajoutez ensuite **People**, reliée à Orders par `Region`.

Schéma logique attendu :

```text
             Orders
          (Commandes)
           /       \
       Order ID    Region
         /           \
      Returns       People
      (Retours)  (Responsables)
```

**Questions :**

- Pourquoi relier Orders et Returns avec `Order ID` ?
- Pourquoi relier Orders et People avec `Region` ?
- Que pourrait-il se passer si l'on reliait deux tables avec une mauvaise colonne ?

**À retenir :** les relations permettent d'analyser ensemble des informations réparties dans plusieurs tables. Une relation mal définie peut conduire à des résultats erronés.

## Étape 3 — Première analyse commerciale (10 min)

Nous allons répondre à une question simple :

**Quelle catégorie de produits génère le plus de chiffre d'affaires ?**

1. Cliquez sur **Feuille 1**.
2. Repérez le panneau **Données**, à gauche.
3. Glissez `Category` dans **Lignes**.
4. Glissez `Sales` dans **Colonnes**.
5. Vérifiez que Tableau utilise `SUM(Sales)`.
6. Cliquez sur l'icône de tri décroissant.

Vous obtenez un graphique en barres comparant les catégories.

**Questions :**

- Quelle catégorie réalise le chiffre d'affaires le plus élevé ?
- Quelle catégorie réalise le chiffre d'affaires le plus faible ?
- Peut-on conclure que la catégorie qui vend le plus est aussi la plus rentable ?

**À retenir :** le chiffre d'affaires mesure le montant des ventes, pas nécessairement le bénéfice.

## Étape 4 — Ajouter la rentabilité (5 min)

Nous allons enrichir notre première analyse.

1. Restez sur le graphique précédent.
2. Repérez le champ `Profit`.
3. Glissez `Profit` sur **Couleur** dans la carte **Repères**.
4. Survolez les barres pour observer les informations.
5. Comparez les ventes et les bénéfices des catégories.

**Questions :**

- Une catégorie qui vend beaucoup génère-t-elle toujours le plus de bénéfices ?
- Que signifie un bénéfice négatif ?
- Pourquoi est-il intéressant de comparer plusieurs indicateurs ?

**À retenir :** une analyse commerciale doit croiser plusieurs mesures pour éviter des conclusions trompeuses.

## Étape 5 — Observer les données par région (5 min)

1. Dupliquez votre feuille.
2. Remplacez `Category` par `Region` dans **Lignes**.
3. Conservez `SUM(Sales)` dans **Colonnes**.
4. Comparez les régions.

**Questions :**

- Quelle région réalise le plus de ventes ?
- Les ventes sont-elles réparties équitablement entre les régions ?
- Quelle information supplémentaire serait utile pour évaluer les performances régionales ?

## Bilan — Ce que vous avez appris

Vous savez maintenant :

- Connecter un fichier Excel à Tableau.
- Reconnaître plusieurs tables dans une source.
- Comprendre le rôle des relations.
- Identifier des dimensions (`Category`, `Region`) et des mesures (`Sales`, `Profit`).
- Construire un premier graphique.
- Interpréter un résultat commercial.

**Question finale :** pourquoi un graphique seul ne suffit-il pas toujours pour prendre une bonne décision ?

**Dans la suite du cours**, vous construirez progressivement votre propre tableau de bord en combinant les produits, les régions et les dates.