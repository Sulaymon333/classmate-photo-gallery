// **** Get DOM elements ****
const classGallery = document.querySelector('.class-gallery');
const classGallery2 = document.querySelector('.class-gallery2');
let showInfo;

const buildProfileCard = (
    {
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
    },
    i
) => {
    const profileCard = document.createElement('div');
    profileCard.classList.add('profile-card');
    profileCard.innerHTML = `<div class="front-face" style="background-image: url(../assets/profile-pictures/${src})"></div>
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
            </div>`;
    if (i < 8) classGallery.appendChild(profileCard);
    if (i > 7 && i < 16) classGallery2.appendChild(profileCard);
};

const renderProfileCard = arr => {
    arr.forEach((student, i) => {
        buildProfileCard(student, i);
    });
};

renderProfileCard(studentsInfo);

const profileCards = document.querySelectorAll('.profile-card');
const frontFaces = document.querySelectorAll('.front-face');

// ***** Flip card funtion *****

function flipCard() {
    console.log(this.dataset);
    this.classList.toggle('flip');
}
profileCards.forEach(profileCard =>
    profileCard.addEventListener('click', flipCard)
);
// ***** hover function ****
function onMouseEnter() {
    console.log(this);

    frontFaces.forEach(front => (front.innerHTML = ''));
    this.querySelector('.front-face').innerHTML = this.querySelector(
        '.back-face h2'
    ).textContent;
}
profileCards.forEach(profileCard =>
    profileCard.addEventListener('mouseenter', onMouseEnter)
);

/* ************ arrow left and right scroll ************** */
const wrapperGallery = document.querySelector('.wrapper-gallery');
const arrowWrapper = document.querySelectorAll('.arrow');
let interval;
let speed = 0;
// doScroll('right');
function doScroll(direction) {
    console.log(speed);

    clearInterval(interval);
    interval = setInterval(function run() {
        if (direction === 'right') {
            wrapperGallery.scrollLeft += 1 + speed;
        } else {
            wrapperGallery.scrollLeft -= 1 + speed;
        }
    }, 10);

    speed += 2;
}

function mouseEnter(e) {
    const { direction } = e.target.dataset;
    console.log(direction);

    doScroll(direction);
}

arrowWrapper.forEach(arrow => {
    console.log(arrow);

    arrow.addEventListener('click', mouseEnter);
    arrow.addEventListener('mouseleave', () => {
        console.log('clear');
        clearInterval(interval);
        speed = 0;
    });
});
