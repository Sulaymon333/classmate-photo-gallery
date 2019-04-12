// **** Get DOM elements ****
const classGallery = document.querySelector('.class-gallery');
let showInfo;

const buildProfileCard = ({
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
}) => {
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
    classGallery.appendChild(profileCard);
};

const renderProfileCard = arr => {
    arr.forEach(student => buildProfileCard(student));
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

    let that = this;
    // setTimeout(function run() {
    // frontFaces.forEach(front => (front.innerHTML = ''));
    console.log(that);
    content = `<div class="front-face-info">
        <h2>${that.querySelector('.name').textContent}</h2>
        <h3>${that.querySelector('.nationality').textContent}</h3>
        </div>`;
    that.querySelector('.front-face').innerHTML = content;

    let frontFaceInfo = document.querySelector('.front-face-info');
    frontFaceInfo.style.opacity = 0;

    setInterval(function() {
        console.log(frontFaceInfo.style.opacity);

        if (frontFaceInfo.style.opacity < 1) {
            frontFaceInfo.style.opacity -= 0.05 * -1;
        } else {
            clearInterval();
        }
    }, 50);
    // }, 500);
}
profileCards.forEach(profileCard =>
    profileCard.addEventListener('mouseenter', onMouseEnter)
);

/* ************ arrow left and right scroll ************** */

const arrowWrapper = document.querySelectorAll('.arrow');
let interval;
let speed = 0;
// doScroll('right');
function doScroll(direction) {
    clearInterval(interval);
    interval = setInterval(function run() {
        if (direction === 'right') {
            classGallery.scrollLeft += 1 + speed;
        } else {
            classGallery.scrollLeft -= 1 + speed;
        }
    }, 10);

    speed += 2;
}

function mouseEnter(e) {
    const { direction } = e.target.dataset;

    doScroll(direction);
}

arrowWrapper.forEach(arrow => {
    arrow.addEventListener('click', mouseEnter);
    arrow.addEventListener('mouseleave', () => {
        clearInterval(interval);
        speed = 0;
    });
});
