// **** flip function ****
const cards = document.querySelectorAll('.profile-card');
function flipCard() {
    this.classList.toggle('flip');
}
cards.forEach(card => card.addEventListener('click', flipCard));
// ***** hover function ****
function toggleOpen() {
    console.log('Hello');
    this.classList.toggle('open');
}

/* ************ click and drop ************** */

// const slider = document.querySelector('.class-gallery');
// let isDown = false;
// let startX;
// let scrollLeft;
// slider.addEventListener('mousedown', e => {
//     isDown = true;
//     slider.classList.add('active');
//     startX = e.pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
// });
// slider.addEventListener('mouseleave', () => {
//     isDown = false;
//     slider.classList.remove('active');
// });
// slider.addEventListener('mouseup', () => {
//     isDown = false;
//     slider.classList.remove('active');
// });
// slider.addEventListener('mousemove', e => {
//     if (!isDown) return;
//     // stop click insitde in text
//     // e.preventDefault();
//     const x = e.pageX - slider.offsetLeft;
//     // console.log({ x, startX });
//     const walk = (x - startX) * 3;
//     // slider.scrollLeft = scrollLeft - walk;
// });
// const image = document.querySelector('img');
// image.addEventListener('click', e => {
//     console.log('image click');
// });
