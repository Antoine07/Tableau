'use strict';
// Une légende et la source restent disponibles si une capture distante échoue.
document.querySelectorAll('.software-capture img').forEach(img => {
  const figure = img.closest('figure');
  const fallback = figure.querySelector('.capture-unavailable');
  const imageLink = img.closest('.capture-image-link');
  function showCaptureStatus(loaded) {
    imageLink.hidden = !loaded;
    fallback.hidden = loaded;
  }
  img.addEventListener('error', () => showCaptureStatus(false));
  img.addEventListener('load', () => showCaptureStatus(true));
  if (img.complete && !img.naturalWidth) showCaptureStatus(false);
});
// Tout le cours reste lisible sans JavaScript ; seuls les contrôles sont enrichis.
const osButtons = [...document.querySelectorAll('[data-os]')];
function selectOS(os) {
  osButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.os === os)));
  document.querySelectorAll('[data-os-panel]').forEach(panel => { panel.hidden = panel.dataset.osPanel !== os; });
}
osButtons.forEach(button => button.addEventListener('click', () => selectOS(button.dataset.os)));
selectOS('windows');
const zones = {
  outils: ['01 · Menus et barre d’outils', 'Les commandes générales servent notamment à annuler, enregistrer ou ajuster l’affichage.', 'Repérez Annuler. Après un déplacement de champ, utilisez-le pour revenir en arrière.'],
  donnees: ['02 · Données et Analyses', 'Données contient les champs de votre source. Analyses propose des éléments d’analyse, que nous utiliserons plus tard.', 'Retrouvez Categorie et Ventes : ce sont deux colonnes du CSV.'],
  etageres: ['03 · Étagères Colonnes et Lignes', 'Elles organisent la structure de la vue. Ici, Categorie crée les lignes et SOMME(Ventes) fournit l’axe horizontal.', 'Placez Categorie sur Lignes, puis Ventes sur Colonnes.'],
  filtres: ['04 · Filtres', 'Cette fiche permet de conserver une partie des données pour la vue.', 'Repérez la fiche, mais laissez-la vide pour garder les 12 commandes.'],
  reperes: ['05 · Repères', 'Un repère est un élément visuel, comme une barre. La fiche contrôle notamment couleur, taille et étiquettes.', 'Glissez Ventes sur Étiquette pour montrer les montants sur les barres.'],
  vue: ['06 · La vue', 'C’est le résultat de vos choix : ici, un graphique avec une barre par catégorie.', 'Survolez une barre dans Tableau pour lire son infobulle.'],
  montremoi: ['07 · Montre-moi / Show Me', 'Ce panneau propose des graphiques adaptés aux champs sélectionnés.', 'Ouvrez-le pour le reconnaître, puis refermez-le pour revenir à la vue.'],
  onglets: ['08 · Onglets et création de feuilles', 'Ils permettent de revenir à la source, de changer de feuille et de créer une feuille, un tableau de bord ou une histoire.', 'Passez de Source de données à Feuille 1, puis retrouvez le bouton Nouvelle feuille de calcul.']
};
const zoneButtons = [...document.querySelectorAll('[data-zone]')];
zoneButtons.forEach(button => button.addEventListener('click', () => {
  zoneButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  const [title, description, task] = zones[button.dataset.zone];
  const box = document.querySelector('#zone-detail');
  const heading = document.createElement('strong'); heading.textContent = title;
  const paragraph = document.createElement('p'); paragraph.textContent = description;
  const action = document.createElement('p'); action.className = 'try'; action.textContent = 'Dans Tableau : ' + task;
  box.replaceChildren(heading, paragraph, action);
}));
const anchors = [...document.querySelectorAll('.course-nav a[href^="#"]')];
const sections = anchors.map(anchor => document.querySelector(anchor.getAttribute('href')));
let scheduled = false;
function updateNavigation() {
  let current = sections[0];
  sections.forEach(section => { if (section.getBoundingClientRect().top <= 180) current = section; });
  anchors.forEach(anchor => {
    if (anchor.hash === '#' + current.id) anchor.setAttribute('aria-current', 'location');
    else anchor.removeAttribute('aria-current');
  });
  scheduled = false;
}
window.addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(updateNavigation); } }, { passive: true });
updateNavigation();

// Les cartes restent toutes consultables sans JavaScript.
const recallCards = [...document.querySelectorAll('.recall-card')];
if (recallCards.length) {
  let recallIndex = 0;
  const counter = document.querySelector('#recall-counter');
  const previous = document.querySelector('#recall-prev');
  const next = document.querySelector('#recall-next');
  document.querySelector('.recall-controls').hidden = false;
  counter.hidden = false;
  function showRecallCard() {
    recallCards.forEach((card, index) => {
      card.hidden = index !== recallIndex;
      card.querySelector('details').open = false;
    });
    counter.textContent = `Carte ${recallIndex + 1} sur ${recallCards.length}`;
    previous.disabled = recallIndex === 0;
    next.textContent = recallIndex === recallCards.length - 1 ? 'Reprendre les cartes ↺' : 'Suivante →';
  }
  previous.addEventListener('click', () => {
    recallIndex = Math.max(0, recallIndex - 1);
    showRecallCard();
  });
  next.addEventListener('click', () => {
    recallIndex = (recallIndex + 1) % recallCards.length;
    showRecallCard();
  });
  recallCards.forEach(card => {
    const answer = card.querySelector('details');
    answer.addEventListener('toggle', () => {
      answer.querySelector('summary').textContent = answer.open ? 'Masquer la réponse' : 'Révéler la réponse';
    });
  });
  showRecallCard();
}
