'use strict';
// Réactivation sans réponses embarquées : le formateur fournit le corrigé à part.
const quiz = document.querySelector('#quiz');
const status = document.querySelector('#quiz-score');
quiz.addEventListener('submit', event => {
  event.preventDefault();
  const fields = [...quiz.querySelectorAll('fieldset')];
  const count = fields.filter(field => field.querySelector('input:checked')).length;
  status.textContent = `${count} / ${fields.length} questions renseignées. ` +
    (count === fields.length ? 'Notez vos choix et préparez leurs justifications pour la correction collective.' : 'Complétez vos choix avant la mise en commun.');
});
quiz.addEventListener('reset', () => { status.textContent = ''; });
quiz.addEventListener('change', () => { status.textContent = ''; });
