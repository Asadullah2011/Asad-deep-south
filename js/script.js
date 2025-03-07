// Funktion zum Anzeigen der jeweiligen Karte
function showCard(cardId) {
  // Alle Karten ausblenden
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.display = 'none';
    card.classList.remove('animate-card');
  });

  // Die angeklickte Karte anzeigen mit Animation
  const card = document.getElementById(`${cardId}-card`);
  card.style.display = 'block';
  setTimeout(() => {
    card.classList.add('animate-card');
  }, 50); // Kleine Verzögerung für die Animation
}

// Initial keine Karte anzeigen
document.addEventListener('DOMContentLoaded', function() {
  // Keine Karte wird angezeigt, bis ein Button gedrückt wird.
});
