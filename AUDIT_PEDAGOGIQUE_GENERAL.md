# Autocritique générale du parcours Tableau

État examiné le 25 octobre 2026, après déplacement du TP « Construire et auditer ses premières vues » en fin de journée.

## Mon erreur de conception

J’ai enrichi un atelier de prise en main en TP complet, sans déplacer immédiatement sa carte, ses liens et ses prérequis. Il restait présenté juste après l’installation, alors qu’il mobilise comparaisons, filtres, comptage distinct et ratios. J’ai traité la difficulté de l’exercice indépendamment de sa place dans la journée. C’était une incohérence de ma part.

J’ai également annoncé la suppression des révisions d’installation en ne retirant que les cartes de l’accueil : les invitations au QCM et aux flashcards subsistaient dans le cours. Enfin, l’exemple de COUNTD était numériquement juste, mais insuffisamment explicite sur la colonne comptée. La distinction entre deux commandes et trois montants différents devait être visible immédiatement.

## Corrections effectuées

- Sur l’accueil, le TP complet et son QCM sont dans une section explicite **Fin de journée**, après les blocs 1 à 3 et l’atelier d’application sur les dates et filtres.
- Le bloc d’installation ne propose plus de démarrer ce TP. Sa sortie suit le parcours de cours existant, vers SQL et les relations.
- Le syllabus, le titre du TP, ses prérequis, son QCM et le lien de fin de l’atelier sur les dates indiquent le même positionnement.
- Le lien « Suite : SQL » en bas du TP final, qui renvoyait à une étape déjà parcourue, est remplacé par le retour au parcours de fin de journée.
- Les invitations au QCM et aux flashcards d’installation sont retirées du bloc 01, conformément au choix déjà fait pour l’accueil. Les anciens fichiers ne sont pas supprimés.
- L’atelier de mini tableau de bord est distingué dans une section « Suite du programme », après le bloc 04 encore annoncé à venir. Il n’est plus mêlé aux étapes qui précèdent le TP de fin de journée.
- Les études de cas sont présentées comme des ressources à attribuer par le formateur, sans suggérer que tous les rendus doivent s’enchaîner dans la journée.
- Le fichier du TP est téléchargeable dès son introduction, avec un aperçu dans la section des données. L’exemple distingue explicitement `COUNTD([Commande]) = 2` de `COUNTD([Ventes]) = 3`.

## Points restant à revoir

### 1. Priorité haute — La charge ne tient pas dans une journée ordinaire

Les durées affichées donnent :

| Séquence | Durée affichée |
| --- | --- |
| Découverte, bloc 00 | 30 min |
| Blocs 01, 02 et 03 | 3 × 75–90 min, soit 225–270 min |
| TP de fin de journée | Durée laissée au formateur |
| **Cours et découverte (hors TP)** | **255–300 min, soit 4 h 15–5 h** |
| Chapitre SQL, indiqué sur l’accueil | 90–120 min supplémentaires |
| **Cours, découverte et SQL (hors TP)** | **345–420 min, soit 5 h 45–7 h** |

Aucune durée n’est désormais annoncée pour les TP ; leur calendrier dépend du formateur. Ces totaux de cours excluent les pauses, les QCM chronométrés, les exercices intégrés, les études et toute pratique de TP.

**Conséquence :** le TP final est placé après les blocs et le QCM de réactivation. Sa durée et son découpage relèvent désormais de ton conducteur de séance.

**Recommandation :** tu fixes le créneau et le découpage du TP. Le support indique les prérequis et les étapes, sans attribuer de durée aux TP.

### 2. Priorité haute — Deux TP de synthèse peuvent faire concurrence

Le TP enrichi demande six feuilles, 36 réponses, des captures, un journal et une synthèse. Le TP en binôme demande deux vues et une note, sur un autre CSV. Ils ont des points communs, mais diffèrent en difficulté et en objectif. Le second comporte une analyse temporelle que le TP d’audit ne développe pas.

**Conséquence :** les présenter tous deux comme des rendus successifs obligatoires surchargerait la séance et rendrait ambigu le « TP de lundi ».

**Recommandation :** désigner un rendu principal. Utiliser l’autre comme variante, prolongement ou activité d’une autre séance. Les fichiers sont conservés ; le catalogue indique désormais que le formateur attribue les études selon l’avancement.

### 3. Priorité moyenne — La difficulté a augmenté plus vite que le guidage

Les nouvelles tâches sont plus exigeantes : rapprocher des agrégats, expliquer les dénominateurs, observer des comptages non additifs, diagnostiquer un filtre et justifier une recommandation. Cela est plus pertinent pour une troisième année que la seule production de barres triées.

Cependant, la quantité de questions n’est pas une preuve de niveau. Le document présente de longs repères et cinq formules avant le premier exercice. COUNTD, ATTR, les champs calculés et les ratios arrivent encore de manière dense. Le bloc 04, consacré aux champs calculés, est annoncé à venir ; l’introduction de quelques calculs dans le TP doit rester clairement limitée et accompagnée.

**Recommandation :** rapprocher chaque repère de l’exercice qui en a besoin ; faire contrôler oralement un calcul avant de passer au suivant ; raccourcir les réponses purement descriptives pour garder du temps pour l’analyse. Si le noyau du TP est réduit, préserver les questions de justification et de diagnostic.

### 4. Priorité moyenne — Le fil rouge est plus fragmenté que promis

Le dossier élève contient six CSV et un fichier Excel Superstore. Les grains diffèrent : commande unique, ligne de commande, observation par date/produit/région. Le syllabus parle pourtant d’un même classeur enrichi au fil des séances.

Le petit fichier de découverte associe chaque catégorie à une région unique : Informatique/Nord, Accessoires/Sud, Mobilier/Ouest. Cela facilite la découverte, mais ne permet pas une analyse croisée réaliste. Le fichier du TP enrichi corrige cette limite, tout en restant très construit : une commande par date et une répartition des régions sur différentes parties du mois.

**Recommandation :** afficher, à chaque changement, le nom du fichier, son grain et son rôle. Définir explicitement quels jeux servent à découvrir, à s’entraîner et à évaluer. Ne pas promettre une continuité technique du classeur quand une nouvelle source impose un autre modèle.

### 5. Priorité moyenne — SQL arrive tôt dans la progression

Le parcours existant place SQL et Superstore après l’installation, avant les blocs de comparaison et de filtres. Ce chapitre introduit déjà relations, jointures, agrégations et comptage distinct. Il répète certaines manipulations ensuite proposées dans le TP Superstore.

La distinction entre Excel et SQL personnalisé est correctement explicitée dans le support. En revanche, l’exemple `SELECT Category, Sales ... ORDER BY Sales` illustre des lignes individuelles, tandis que la manipulation voisine produit des barres agrégées. La réserve écrite est utile, mais ne remplace pas une séparation visuelle nette entre ces deux questions.

**Correction ajoutée depuis le premier audit :** après la leçon sur les relations, le chapitre introduit maintenant la part des commandes retournées par catégorie, avec un champ conditionnel dans `Returns`, un dénominateur `COUNTD(Order ID)` provenant de `Orders`, une vue en pourcentage, un SQL pédagogique, un corrigé et deux questions supplémentaires au QCM. L’heure d’application qui réunissait ces manipulations reste dans le chapitre ; tu en fixeras le temps et l’usage. L’explication distingue clairement le retour à la commande du retour d’un produit et avertit qu’une commande multi-catégorie peut contribuer à plusieurs taux.

**Limite de validation :** j’ai essayé d’ouvrir le fichier `.xls` fourni dans LibreOffice pour vérifier ses colonnes et la vue réelle, mais LibreOffice s’est interrompu à cause d’une restriction macOS. La formule et les relations sont donc fondées sur le modèle déjà décrit dans le cours ; il reste à les exécuter dans la version de Tableau du formateur et à confirmer que la table `Returns` expose bien `Returned` et `Order ID`. Le support ne prétend pas connaître un classement ou des taux fixes.

**Recommandation :** examiner si SQL doit venir après la consolidation des vues simples, ou être une démonstration complémentaire. Éviter de compter le TP intégré au chapitre et le TP Superstore comme deux passages identiques obligatoires. Aucun déplacement de ce chapitre n’a été fait dans cette correction ciblée.

### 6. Priorité moyenne — Validation technique et visuelle incomplète

Le contrôle statique porte sur **38 pages HTML**, dans `docs/` et `corrections/`. Aucun fichier local référencé ni aucune ancre locale manquante n’a été détecté. Les balises d’image examinées ont un texte alternatif. Cela ne constitue pas un audit complet d’accessibilité.

Les pages utilisent **18 occurrences d’images distantes, correspondant à 15 URL différentes**. Leur disponibilité dépend du réseau ; les liens distants n’ont pas tous été vérifiés. Le TP enrichi dispose de deux schémas locaux et de consignes textuelles, en complément d’une capture officielle distante.

Les chiffres du TP enrichi ont été recalculés depuis le CSV, avec un contrôle SQL indépendant. Les fichiers élève et formateur sont identiques. Le contrôle ne remplace pas l’exécution dans Tableau : import, intitulés des menus, portée des filtres, totaux distincts, sauvegarde et réouverture doivent être essayés dans la version utilisée en salle.

Le navigateur automatisé n’a pas pu démarrer dans cet environnement, à cause d’une restriction macOS. Le rendu à différentes tailles d’écran n’a donc pas été validé visuellement. Les schémas sont valides comme fichiers SVG, mais cela ne prouve pas à lui seul leur lisibilité à toutes les tailles.

**Recommandation :** avant la séance, effectuer un parcours réel avec un poste étudiant : ouvrir la page, télécharger le CSV, importer, produire une vue, tester COUNTD et un filtre, puis enregistrer et rouvrir. Vérifier aussi la lecture des consignes sur un écran de portable.

## Appréciation générale

Le contenu est maintenant mieux différencié : prise en main, consolidation, application et TP d’audit. Les fichiers, les corrigés séparés et les valeurs de contrôle constituent des bases utiles. La principale faiblesse reste la planification : j’ai accumulé des ressources avant d’établir une séance réalisable. La prochaine amélioration devrait porter sur un conducteur horaire et un rendu principal clairement choisi, plutôt que sur l’ajout de nouvelles questions.

### Mise à jour — progression SQL et application Superstore (25 octobre 2026)

Le chapitre distingue désormais trois temps : explication de la relation logique et du `JOIN` physique avec un exemple de grain, présentation commentée de la formule de taux de commandes retournées, puis exercice d’application dans le fichier. Le chapitre se termine par le QCM SQL ; le TP Superstore approfondi vient ensuite. Le renvoi vers ce TP a été retiré de l’exercice qui le précédait et ajouté à la navigation de fin du QCM. La même progression apparaît dans le syllabus et sur l’accueil.

Le TP demande maintenant de comparer lignes et commandes distinctes, d’examiner les cardinalités observées, de vérifier l’effet des relations, de calculer le taux de marge avec `SUM(Profit) / SUM(Sales)`, puis de construire et interpréter le taux de retour avec ses effectifs. Il pose des questions sur la différence entre volume et taux, sur la moyenne des ratios par ligne, et sur les limites d’une attribution des retours au niveau de la commande. Le corrigé formateur inclut ces calculs et les contrôles attendus. Les durées des TP restent absentes.

**Auto-critique de cette modification :** la version précédente mélangeait explication, manipulation complète et questions d’analyse dans la leçon, puis répétait presque la même activité sous le titre de TP guidé. Elle proposait aussi un lien direct vers le TP avant le QCM. Cette redondance et ce mauvais enchaînement sont corrigés en réduisant la partie cours à la définition, aux formules commentées, à un exemple fictif et à la requête SQL, puis en réservant l’application au bloc suivant. Le TP approfondi apporte maintenant une progression technique réelle au lieu de répéter les deux graphiques introductifs.

**Limites restantes :** le fichier `.xls` et les calculs n’ont pas été exécutés dans Tableau dans cette passe ; les résultats chiffrés et les cardinalités réelles sont donc laissés à vérifier sur le poste formateur. Le TP reste placé dans le parcours après le chapitre SQL et avant le bloc 02, conformément à la structure actuelle du cours ; cette position pédagogique plus précoce que le TP de fin de journée reste un choix de parcours à réévaluer séparément. Les exemples fictifs sont étiquetés et aucun taux réel n’est annoncé comme universel.
