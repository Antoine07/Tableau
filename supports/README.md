# Syllabus — Présentation du parcours Tableau

Page élève : [syllabus](../docs/syllabus.html). Accès depuis le bouton « Découvrir le programme » de l’accueil et depuis le sommaire des trois cours.

Le syllabus présente la Business Intelligence, les rôles de Power Query, Power BI Desktop, DAX et du service Power BI, puis explique notre choix pédagogique de Tableau. Toutes les manipulations obligatoires restent dans Tableau. Aucun prérequis Python ni installation de Power BI n’est demandé.

## Programme et disponibilité

0. Découvrir l’analyse de données — disponible ; visite commentée avant la prise en main.
1. Installer et découvrir Tableau — disponible.
2. Comparer les ventes — disponible.
3. Explorer les ventes : dates et filtres — disponible.
4. Créer des champs calculés — à venir.
5. Analyser la performance — à venir ; le jeu de données devra être enrichi avec des coûts.
6. Construire un tableau de bord — à venir.
7. Répondre à une demande métier — à venir.

L’introduction à la BI du syllabus précède le bloc découverte, puis le bloc 1. Le syllabus est une présentation du parcours, pas un nouveau bloc d’exercices. Les blocs futurs sont affichés avec un statut « À venir » sans liens vers des pages inexistantes.

## Repères internes pour le formateur

- Introduction et blocs 1 à 3 : 4–5 h.
- Blocs 4 et 5 : 4–5 h.
- Bloc 6 : 2–3 h.
- Bloc 7 : 3–4 h.
- Parcours Tableau : 13–17 h ; rapprochements facultatifs avec pandas : environ 1 h supplémentaire.

Ces estimations restent des repères internes : aucune durée globale ni répartition par journées n’est affichée dans le syllabus destiné aux étudiants. La progression est organisée par le formateur. Réserver 14–18 h pour le parcours complet prévu. Trois journées de six heures pédagogiques, hors pauses, permettent la pratique et l’accompagnement. Sans l’option pandas, utiliser ce temps pour consolider le projet. Les évaluations combinent exercices, QCM et projet avec restitution ; les critères portent sur l’exactitude, la lisibilité, l’interprétation et l’autonomie.

## Le lien avec pandas

Un aperçu repliable du syllabus compare calcul par ligne, agrégation par produit et filtrage de Nord. Chaque expression est expliquée et reliée aux données du CSV. Deux encadrés pédagogiques sont présentés au bloc 0, puis repris dans les blocs 2 et 3. Le bloc 4 approfondira les calculs ; Python reste facultatif et aucune connexion Python–Tableau n’est requise. Comparer seulement des données, des filtres et des regroupements équivalents.

Le syllabus fonctionne sans JavaScript et réutilise le thème du cours. Il contient les liens vers les documentations officielles Microsoft, Tableau et pandas.

---

# Bloc 01 — Installer et découvrir Tableau

Support élève : [cours HTML](../docs/supports/01_installation_decouverte.html).
QCM séparé : [révision du bloc 1](../docs/qcm/01_installation_decouverte.html).
Accueil du parcours : [index](../docs/index.html).
Données fictives : [ventes_decouverte.csv](../docs/data/ventes_decouverte.csv).

Public débutant. Durée indicative : 75 à 90 minutes, installation comprise.
Le cours reprend le thème local CODA/ALGO, avec des extensions dans `docs/assets/tableau.css`.
Aucun outil de compilation, compte sur le site ou service externe n’est nécessaire. Ouvrir `docs/index.html` dans un navigateur. Les liens vers Tableau et les captures officielles nécessitent Internet ; les autres ressources sont locales.

## Déroulé formateur

- 5 min : objectif, question métier et vocabulaire initial.
- 15–20 min : installation Windows/macOS et lancement de Tableau Public.
- 10 min : connexion au CSV, vérification des cinq champs et des douze lignes.
- 10 min : vocabulaire et exploration des huit zones du schéma interactif.
- 10 min : première vue guidée et sauvegarde locale.
- 20 min : trois exercices progressifs, indices repliés et corrigés distribués séparément.
- 5–15 min : mise en commun, questions de révision, QCM et huit flashcards finales.

Le schéma est une illustration pédagogique, pas une capture ni une simulation complète de Tableau. Faire exécuter les manipulations dans le logiciel.

## Résultats de contrôle

- Accessoires : 360 €.
- Informatique : 510 €.
- Mobilier : 450 €.
- Total : 1 320 € ; douze commandes, quatre par catégorie.
- QCM : B, A, C, D, B.

Le CSV est synthétique et volontairement petit. Il ne permet pas de conclure sur la rentabilité. Le bloc 2 enrichit ce même classeur avec une nouvelle source distincte et deux vues par produit.

## Documentation

Les liens officiels sont intégrés au cours. Vérification documentaire : 23 octobre 2026.
La sauvegarde locale existe dans Tableau Public depuis la version 2024.2. La publication sur Tableau Public rend accessibles le classeur et ses données publiées. Le bloc utilise l’enregistrement local.

## Accessibilité et fonctionnement

Les sections, liens, tableaux et indices restent lisibles sans JavaScript. Les corrigés séparés sont également lisibles sans JavaScript. Les deux systèmes d’installation sont alors affichés. JavaScript active le sélecteur Windows/macOS, les explications du schéma, la navigation entre les flashcards et, sur les pages dédiées, la correction du QCM. Aucune réponse n’est envoyée ni enregistrée. La page fournit des styles d’impression et respecte la préférence de réduction des animations.


# Bloc 02 — Comparer les ventes

Support élève : [cours HTML](../docs/supports/02_comparer_ventes.html).
QCM séparé : [révision du bloc 2](../docs/qcm/02_comparer_ventes.html).
Données fournies : [ventes_tableau_exercice.csv](../docs/data/ventes_tableau_exercice.csv).

Durée indicative : 75 à 90 minutes. Prérequis : bloc 1. Conserver le même classeur, ajouter le fichier comme une source distincte et sélectionner cette source dans les nouvelles feuilles. Ne pas relier les deux CSV.

## Déroulé formateur

- 5 min : question métier, périmètre et objectif.
- 15 min : connexion et exercice guidé de lecture des données.
- 10 min : dimensions, mesures et agrégations.
- 15 min : graphique de chiffre d’affaires, tri, étiquettes et titre.
- 5 min : lecture du résultat et conclusion.
- 15 min : exercice autonome sur les quantités.
- 10 min : diagnostic d’une agrégation Nombre au lieu de Somme.
- Jusqu’à 15 min : révision, QCM et huit flashcards.

Les corrigés détaillés des résultats et des exercices sont fournis dans le dossier séparé corrections/. Les pages élèves conservent les énoncés, les indices et les notions du cours. Les manipulations se font dans Tableau.

## Contrôles calculés à partir du CSV

| Produit | Quantités | Chiffre d’affaires | Observations |
| --- | ---: | ---: | ---: |
| Ordinateur | 66 | 56 100 € | 12 |
| Ecran | 78 | 17 940 € | 12 |
| Clavier | 90 | 4 950 € | 12 |
| Total | 234 | 78 990 € | 36 |

Une ligne décrit une observation Date–Region–Produit, pas nécessairement une commande et jamais implicitement une seule unité. Le fichier couvre quatre dates de janvier à avril 2026. Les conclusions portent sur les données fournies.

Diagnostic : COUNT(Chiffre_affaires) renvoie 12 pour chaque produit. AVG donne respectivement 4 675 €, 1 495 € et 412,5 €. SUM donne les totaux du tableau.

QCM : B, C, A, D, B. Le classement des quantités est Clavier, Ecran, Ordinateur ; celui du chiffre d’affaires est Ordinateur, Ecran, Clavier. Le prix unitaire explique cette différence. Aucun coût n’est disponible pour calculer un bénéfice.

Le bloc 3 poursuit le parcours avec les dates et les filtres. Les champs calculés et le tableau de bord restent à rédiger. Le bloc 2 se termine par les flashcards, comme le bloc 1.


## Captures officielles de l’interface

Les blocs 1 et 2 affichent six illustrations issues de quatre captures officielles Tableau : source de données, espace de travail, fiche Repères et emplacements des commandes de tri. Les légendes précisent le geste à effectuer avec notre CSV et distinguent les données des captures de celles des exercices. Les liens « Agrandir » ouvrent l’image en taille d’origine dans un nouvel onglet.

Le schéma interactif du bloc 1 est conservé dans une section repliable, après la capture de l’espace de travail. Les flashcards restent la dernière section de chaque bloc.

Les adresses et crédits sont regroupés dans `docs/assets/tableau-captures.json`. Les images sont chargées directement depuis `help.tableau.com` : une connexion Internet est nécessaire. Les captures PNG ont été reconnues par l’outil Web ; leur rendu intégré n’a pas pu être contrôlé dans un navigateur local. L’accès réseau depuis le terminal ne permet pas actuellement de les télécharger dans le dossier du cours. Les fichiers source des images ne sont pas modifiés.


## Organisation des cours et des QCM

Les cours de `docs/supports/` contiennent les notions, exemples, exercices, questions orales de révision et flashcards finales. Les formulaires à choix multiples sont uniquement dans `docs/qcm/`, avec cinq questions par bloc, un score, une explication par réponse et un bouton pour recommencer.

L’accueil propose trois cartes de QCM distinctes des trois cartes de cours. Chaque cours possède un lien vers son QCM dans le sommaire et dans sa partie Révision ; chaque QCM permet de revenir au cours ou au parcours. Les questions et leurs bonnes réponses ont été conservées lors du déplacement.

Le script `docs/assets/tableau.js` gère les cours ; `docs/assets/qcm.js` gère les formulaires de QCM. Les corrections interactives nécessitent JavaScript, sans envoi ni stockage des réponses.


# Bloc 03 — Explorer les ventes : dates et filtres

Support élève : [cours HTML](../docs/supports/03_dates_filtres.html).
QCM séparé : [révision du bloc 3](../docs/qcm/03_dates_filtres.html).
Données réutilisées : [ventes_tableau_exercice.csv](../docs/data/ventes_tableau_exercice.csv).

Durée indicative : 75 à 90 minutes. Prérequis : bloc 2. Conserver le même classeur et sélectionner la source ventes_tableau_exercice déjà connectée. Créer une nouvelle feuille « Évolution des ventes ». Aucun ajout de source, relation ou champ calculé n’est nécessaire.

## Déroulé formateur

- 5 min : question métier, reprise du classeur et périmètre du fichier.
- 10 min : niveau de date, mois continu, agrégation et choix d’une courbe.
- 15 min : exercice guidé de construction de la courbe et lecture des résultats.
- 15 min : filtres Region et Produit, combinaison des critères et essai de période fixe.
- 15 min : exercice autonome Nord, puis Nord et Ordinateur.
- 10 min : diagnostic d’un filtre actif dont la fiche est masquée.
- 5 min : validation du fil rouge et enregistrement.
- Jusqu’à 15 min : questions de révision, huit flashcards finales et QCM séparé.

## Contrôles calculés à partir du CSV

| Mois 2026 | Toutes régions et tous produits | Nord, tous produits | Nord, Ordinateur | Ouest, tous produits (extension) |
| --- | ---: | ---: | ---: | ---: |
| Janvier | 14 640 € | 2 610 € | 1 700 € | 7 150 € |
| Février | 18 045 € | 3 745 € | 2 550 € | 8 285 € |
| Mars | 21 450 € | 4 880 € | 3 400 € | 9 420 € |
| Avril | 24 855 € | 6 015 € | 4 250 € | 10 555 € |
| Total | 78 990 € | 17 250 € | 11 900 € | 35 410 € |

Sans filtre, chaque point mensuel additionne neuf observations. L’essai de plage du 1er février au 31 mars 2026 conserve deux points et 39 495 €, toutes régions et tous produits. Retirer ensuite Date de Filtres, en gardant Date sur Colonnes.

Diagnostic : masquer la fiche Region laisse le filtre Nord actif. Réafficher la fiche et sélectionner toutes les régions restaure les montants généraux. Les filtres restent propres à cette feuille. État final attendu : Region et Produit sur Tout, fiches visibles, aucun filtre Date.

QCM : C, A, D, B, C. Trois exercices avec indices repliés et corrigés distribués séparément ; une extension facultative. La courbe SVG du corrigé est une illustration locale fondée sur le CSV, pas une capture du logiciel. Le tableau associé fournit les valeurs en texte. Les flashcards restent la dernière section du cours.

Le fichier contient seulement quatre dates (le 15 de chacun des quatre mois). Les totaux mensuels décrivent les observations disponibles, pas un relevé exhaustif de tous les jours. Ne pas déduire des ventes nulles des dates absentes, une rentabilité, une saisonnalité ou une prévision.

## Documentation du bloc 3

Vérification documentaire : 24 octobre 2026. Les liens officiels sont intégrés au cours :

- [Dates continues](https://help.tableau.com/current/pro/desktop/fr-fr/dates_continuous.htm).
- [Graphiques en courbes](https://help.tableau.com/current/pro/desktop/fr-fr/buildexamples_line.htm).
- [Filtrer les données et afficher les fiches de filtre](https://help.tableau.com/current/pro/desktop/fr-fr/filtering.htm).

Les textes et les indices du bloc 3 sont locaux. Quatre captures officielles sont chargées depuis help.tableau.com et nécessitent Internet. Les résultats détaillés sont dans le dossier de correction séparé. Le cours réutilise tableau.js pour les flashcards et la navigation, et qcm.js pour la correction. Il reste lisible sans JavaScript ; le score interactif du QCM nécessite JavaScript.


## Vérification du bloc 3

Les liens locaux et les ancres des sept pages ont été vérifiés, ainsi que la structure HTML des deux nouvelles pages. Les montants mensuels et les totaux des quatre périmètres ont été recalculés à partir du CSV. Le cours contient trois exercices et huit flashcards ; le QCM comprend cinq questions avec quatre choix et une réponse attendue chacune.

L’aperçu navigateur n’a pas pu être lancé : Chrome headless s’est arrêté au démarrage dans cet environnement. Le rendu visuel et les interactions dans un navigateur restent donc à vérifier ; les scripts partagés des flashcards et du QCM n’ont pas été modifiés.


## Captures réelles du bloc 3

Ajout le 25 octobre 2026 de cinq captures authentiques de la documentation officielle Tableau : choix du mois continu, courbe mensuelle, sélection des valeurs d’une dimension, type de filtre de date et menu d’une fiche de filtre. Lors de la séparation des corrections, le menu de la fiche a été retiré de la page élève avec le corrigé du diagnostic : quatre captures restent dans le cours.

Les captures restent intactes, en anglais, avec un texte alternatif, une légende en français, la correspondance avec les champs de notre CSV et des liens vers l’image originale et sa source. Elles utilisent les composants et le message de repli déjà présents dans les blocs 1 et 2. La courbe SVG qui figurait dans le corrigé a été retirée de la page élève lors de la séparation des corrections. Le dossier séparé fournit les valeurs et la démarche sous forme textuelle.

Les adresses ont été relevées dans les pages officielles et les cinq PNG ont été reconnus par l’outil Web. L’accès réseau du terminal ne permet pas leur téléchargement local ; les images sont donc référencées à distance. Le rendu dans le navigateur local reste à contrôler.


# Études de cas, réactivation et corrections séparées

Le catalogue élève est dans [docs/etudes/index.html](../docs/etudes/index.html), accessible depuis l’accueil, le syllabus et les trois blocs. Aucun horaire ni planning par journées n’est imposé. Le formateur déclenche les études selon les acquis du groupe.

Les études ciblent des étudiants de troisième année débutant sur Tableau : choisir et justifier les vues, réconcilier des totaux, examiner la robustesse d’une conclusion et distinguer donnée absente et valeur nulle. Elles ne requièrent pas de champs calculés ni de techniques non encore enseignées. Les trois études prolongent le même projet boutique dans un classeur Etudes_Tableau, avec deux sources indépendantes.

| Étude | Prérequis | Données | Problème posé |
| --- | --- | --- | --- |
| 1 — Quelle priorité commerciale ? | Bloc 1 | etude_01_commandes.csv | Classement en montants versus nombre de commandes ; sensibilité à une commande exceptionnelle. |
| 2 — Quel produit soutenir ? | Blocs 1–2 | etudes_02_03_ventes.csv | Choisir entre chiffre d’affaires et volume ; réfuter une conclusion fondée sur COUNT. |
| 3 — La baisse est-elle réelle ? | Blocs 1–3 | Même source que l’étude 2 | Couverture incomplète, comparaison à périmètre constant et compensation des évolutions régionales. |

Rendu : classeur et CSV, deux ou trois vues et leurs captures, tableau de contrôle et synthèse de dix lignes maximum. La remise se fait par le canal donné par le formateur, sans collecte sur le site. Le barème proposé est de 20 points : fiabilité 5, vues 5, analyse critique 5, recommandation et rendu 5.

À la reprise suivante, utiliser les cinq questions du QCM de réactivation associé, sans support, avant correction collective. Pour la dernière étude, organiser cette reprise après remise au cours de la même séance si nécessaire.

Les QCM de réactivation dans docs/qcm/reactivation_01.html à reactivation_03.html utilisent assets/reactivation.js. Ils vérifient seulement que les questions sont renseignées ; aucune bonne réponse, explication de correction ou note n’est embarquée dans ces pages. Les étudiants notent leurs choix et les justifient oralement. Les QCM de révision déjà présents dans les cours conservent leur autocorrection pour l’entraînement.

## Dossier formateur hors site

Les corrections détaillées sont dans [corrections/index.html](../corrections/index.html), à la racine du projet, hors de docs/. Le dossier contient ses styles, ses quatre CSV et trois pages couvrant les neuf exercices existants, les ateliers guidés, les extensions, les trois études et les QCM. Il est autonome et utilisable localement ou dans un dépôt GitHub séparé. Aucun dépôt distant n’a été créé et aucune publication n’a été effectuée.

Le site élève ne contient aucun lien vers ce dossier. Les anciens blocs de correction détaillée repliés ont été retirés des trois cours ; les notions, les exemples guidés, les indices et les flashcards restent accessibles. Publier uniquement docs/ pour le site élève ; distribuer corrections/ séparément au moment choisi.

## Points de contrôle des nouvelles données

- Étude 1 : 15 commandes distinctes, total 3 000 €. Catégories : Informatique 1 400 €, Mobilier 1 000 €, Accessoires 600 €. Régions : Nord 1 480 €, Ouest 800 €, Sud 720 €.
- Sensibilité sans E001 : total 2 100 €, Informatique 500 €, Nord 580 €. Mobilier devient premier par catégorie et Ouest par région. Le CSV source reste intact.
- Étude 2 : 51 observations ; 149 230 € et 489 unités. Ordinateur : 100 300 € / 118 unités ; Ecran : 37 490 € / 163 ; Clavier : 11 440 € / 208. Chaque produit a 17 observations.
- Étude 3 : 54 combinaisons attendues ; les trois observations Nord de mai sont absentes. Total observé de mai : 16 455 €, contre 26 555 € pour chacun des autres mois. Sur Sud–Ouest, avril vaut 17 590 € et mai 16 455 €, soit un écart de −1 135 €. Ne pas interpréter Nord manquant comme zéro et ne pas reconstituer sa valeur.


# Bloc 00 — Découvrir l’analyse de données

Page élève : [bloc découverte](../docs/supports/00_decouvrir_analyse.html). Parcours : syllabus → bloc 0 → bloc 1. L’accueil met la découverte en première carte et en action principale. Le programme distingue ce bloc d’observation des sept blocs pratiques ; les blocs 0 à 3 sont disponibles.

Le bloc présente quatre lectures : comparer les ventes, distinguer les indicateurs, examiner les régions et observer un tableau de bord. Chaque lecture comporte une question orale, un visuel officiel et une analyse courte. Ce bloc n’est pas une étude à rendre et ne dispose pas de QCM ni de corrigé d’évaluation.

## Visuels authentiques et démonstration

- Deux captures distantes du tutoriel officiel Tableau : ventes par catégorie/année et analyse par région.
- Deux aperçus locaux en français, copiés sans modification depuis les ressources d’exemple de Tableau Public : analyse des clients et vue d’ensemble Hypermarché. Ils sont conservés à leur résolution d’origine ; leurs limites de cadrage sont signalées.
- Le classeur exemple officiel Hypermarché est fourni dans docs/data/tableau-exemple-hypermarche.twbx pour une démonstration dans Tableau. Ses trois sources sont incluses. Aucun classeur étudiant ni corrigé n’est utilisé pour cette démonstration.

Les aperçus du logiciel peuvent représenter une édition plus ancienne des données ; les chiffres et périodes du classeur ouvert peuvent donc différer. Le texte n’attribue jamais les résultats du CSV de la boutique aux images Superstore/Hypermarché. Le manifeste docs/assets/decouverte/sources.json documente l’origine des images et du classeur.

## Parallèles pandas

Deux encadrés repliables : regrouper les montants par produit et sélectionner Nord. Le chargement CSV, les fonctions, l’ordre des opérations, les sorties et les pièges sont expliqués. Ces exemples produisent des données, pas les graphiques Tableau. Ils sont transposés sur ventes_tableau_exercice.csv, distinct du jeu des captures.

Contrôles : CA par produit = Ordinateur 56 100 €, Ecran 17 940 €, Clavier 4 950 €. Quantités = 66, 78 et 90. Sélection Nord = 12 observations et 17 250 €. Les expressions des pages ont été exécutées avec pandas sur le CSV local.

Les blocs 2 et 3 contiennent désormais un rappel repliable vers ces correspondances. Le syllabus annonce les calculs par ligne et les conditions pour le bloc 4 à venir. Aucun changement n’est apporté aux jeux de données des études ni au dossier de correction séparé.


## Ajouts du 25 octobre 2026

- Chapitre SQL : `docs/supports/04_sql_fondamentaux.html`.
- TP guidé Superstore : `docs/supports/05_tp_superstore.html`.
- Fichier fourni : `docs/data/sample_-_superstore.xls`.
- QCM : `docs/qcm/04_sql_fondamentaux.html` et `05_tp_superstore.html`.
- Tous les QCM affichent désormais une question à la fois, avec feedback immédiat et bilan final.
- La démonstration TWBX défaillante du bloc 00 a été supprimée.
