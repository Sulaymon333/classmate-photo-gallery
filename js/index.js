// **** flip function ****
const cards = document.querySelectorAll('.profile-card');
function flipCard() {
    console.log(this);

    console.log(this.dataset);

    this.classList.toggle('flip');
}
cards.forEach(card => card.addEventListener('click', flipCard));
// ***** hover function ****
function toggleOpen() {
    console.log('Hello');
    this.classList.toggle('open');
}
