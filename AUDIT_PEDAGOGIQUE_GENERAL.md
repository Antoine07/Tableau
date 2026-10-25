# Autocritique générale du parcours Tableau

État examiné le 25 octobre 2026, après déplacement du TP « Construire et auditer ses premières vues » en fin de journée.

## Mon erreur de conception

J’ai enrichi un atelier de prise en main jusqu’à en faire un TP complet de 3 h 30, sans déplacer immédiatement sa carte, ses liens et ses prérequis. Il restait présenté juste après l’installation, alors qu’il mobilise comparaisons, filtres, comptage distinct et ratios. J’ai traité la difficulté de l’exercice indépendamment de sa place dans la journée. C’était une incohérence de ma part.

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
| TP complet de fin de journée, QCM compris | 210 min |
| **Sous-total** | **465–510 min, soit 7 h 45–8 h 30** |
| Chapitre SQL, indiqué sur l’accueil | 70–90 min supplémentaires |
| **Sous-total avec SQL** | **8 h 55–10 h** |

Ce calcul exclut le TP Superstore, l’atelier sur les dates, les révisions séparées des cours, les autres rendus, les pauses et les difficultés d’installation. Il suppose que les durées annoncées sont effectivement cumulatives ; aucun conducteur de séance ne démontre le contraire.

**Conséquence :** « fin de journée » indique maintenant correctement le moment de lancement, mais ne prouve pas que les 36 questions peuvent être terminées ce jour-là.

**Recommandation :** fixer un conducteur horaire et distinguer un noyau de TP de 90–120 minutes des approfondissements. Conserver les 36 questions comme parcours complet, mais sélectionner explicitement les questions obligatoires et les prolongements selon le créneau réel. Autre possibilité : réserver une demi-journée entière au TP. La durée complète reste affichée honnêtement ; je n’ai pas raccourci les exercices sans arbitrage pédagogique.

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

**Recommandation :** examiner si SQL doit venir après la consolidation des vues simples, ou être une démonstration complémentaire. Éviter de compter le TP intégré au chapitre et le TP Superstore comme deux passages identiques obligatoires. Aucun déplacement de ce chapitre n’a été fait dans cette correction ciblée.

### 6. Priorité moyenne — Validation technique et visuelle incomplète

Le contrôle statique porte sur **38 pages HTML**, dans `docs/` et `corrections/`. Aucun fichier local référencé ni aucune ancre locale manquante n’a été détecté. Les balises d’image examinées ont un texte alternatif. Cela ne constitue pas un audit complet d’accessibilité.

Les pages utilisent **18 occurrences d’images distantes, correspondant à 15 URL différentes**. Leur disponibilité dépend du réseau ; les liens distants n’ont pas tous été vérifiés. Le TP enrichi dispose de deux schémas locaux et de consignes textuelles, en complément d’une capture officielle distante.

Les chiffres du TP enrichi ont été recalculés depuis le CSV, avec un contrôle SQL indépendant. Les fichiers élève et formateur sont identiques. Le contrôle ne remplace pas l’exécution dans Tableau : import, intitulés des menus, portée des filtres, totaux distincts, sauvegarde et réouverture doivent être essayés dans la version utilisée en salle.

Le navigateur automatisé n’a pas pu démarrer dans cet environnement, à cause d’une restriction macOS. Le rendu à différentes tailles d’écran n’a donc pas été validé visuellement. Les schémas sont valides comme fichiers SVG, mais cela ne prouve pas à lui seul leur lisibilité à toutes les tailles.

**Recommandation :** avant la séance, effectuer un parcours réel avec un poste étudiant : ouvrir la page, télécharger le CSV, importer, produire une vue, tester COUNTD et un filtre, puis enregistrer et rouvrir. Vérifier aussi la lecture des consignes sur un écran de portable.

## Appréciation générale

Le contenu est maintenant mieux différencié : prise en main, consolidation, application et TP d’audit. Les fichiers, les corrigés séparés et les valeurs de contrôle constituent des bases utiles. La principale faiblesse reste la planification : j’ai accumulé des ressources avant d’établir une séance réalisable. La prochaine amélioration devrait porter sur un conducteur horaire et un rendu principal clairement choisi, plutôt que sur l’ajout de nouvelles questions.
