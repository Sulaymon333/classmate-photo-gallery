// **** Get DOM elements ****
const classGallery = document.querySelector('.class-gallery');

const buildProfileCard = (student) => {
    const {
        firstName,
        lastName,
        title,
        nationality,
        src,
        favoriteQuote,
        alt,
        joinedOn,
        motivatesMe,
        longTermVision,
        whySofterDeveloper,
        skills
    } = student;
    const profileCard = document.createElement('div');
    profileCard.classList.add('profile-card');
    profileCard.innerHTML =
        `<div class="front-face" style="background-image: url(../assets/profile-pictures/${src})"></div>
            <div class="back-face profile-info">
                <h2 class="name">${firstName} ${lastName}</h2>
                <h3 class="title">${title}</h3>
                <h3 class="nationality">${nationality}</h3>
                <h3 class="skills">${skills.join(', ')}</h3>
                <p class="why-developer">${whySofterDeveloper}</p>
                <p class="vision">${longTermVision}</p>
                <p class="motivation">${motivatesMe}</p>
                <p class="quote">${favoriteQuote}</p>
                <h4 class="joined-on">${joinedOn}</h4>
            </div>`
    classGallery.appendChild(profileCard);
}

const renderProfileCard = (arr) => {

    arr.forEach(student => {
        buildProfileCard(student)
    });
}

renderProfileCard(studentsInfo)


const profileCards = document.querySelectorAll('.profile-card');

function flipCard() {
    console.log(this);

    console.log(this.dataset);

    this.classList.toggle('flip');
}
profileCards.forEach(profileCard => profileCard.addEventListener('click', flipCard));
// ***** hover function ****
function toggleOpen() {
    console.log('Hello');
    this.classList.toggle('open');
}

/* ************ click and drop ************** */

const slider = document.querySelector('.class-gallery');
let isDown = false;
let startX;
let scrollLeft;
slider.addEventListener('mousedown', e => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
    if (!isDown) return;
    // stop click insitde in text
    // e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    // console.log({ x, startX });
    const walk = (x - startX) * 3;
    // slider.scrollLeft = scrollLeft - walk;
});
// const image = document.querySelector('img');
// image.addEventListener('click', e => {
//     console.log('image click');
// });