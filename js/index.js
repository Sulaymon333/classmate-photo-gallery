// **** flip function ****
const cards = document.querySelectorAll('.profile-card');
function flipCard() {
    this.classList.toggle('flip');
}
cards.forEach(card => card.addEventListener('click', flipCard));
