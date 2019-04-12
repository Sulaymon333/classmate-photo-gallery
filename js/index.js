// **** Get DOM elements ****
let classGallery = document.querySelector('.class-gallery');
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
    profileCard.innerHTML = `<div class="front-face" style="background-image: url(./assets/profile-pictures/${src})"></div>
            <div class="back-face profile-info">
                <h2 class="name">${firstName} ${lastName}</h2>
                <h3 class="title">${title}</h3>
 
                <h3 class="nationality"><span> Nationality</span></br>${nationality}</h3>
                <h3 class="skills"><span>Skills</span></br>${skills.join(
                    ', '
                )}</h3>
                <p class="why-developer"><span>Why-developer</span></br>${whySofterDeveloper}</p>
                <p class="vision"><span>Vision</span></br>${longTermVision}</p>
                <p class="motivation"><span>Motivation</span></br>${motivatesMe}</p>
                <p class="quote"><span>Quote</span></br>${favoriteQuote}</p>
                <h4 class="joined-on"><span>Joined-On</span></br>${joinedOn}</h4>
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

    frontFaces.forEach(front => (front.innerHTML = ''));
    this.querySelector('.front-face').innerHTML = this.querySelector(
        '.back-face h2'
    ).textContent;
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
    // console.log(speed);

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
    // console.log(direction);

    doScroll(direction);
}

arrowWrapper.forEach(arrow => {
    console.log(arrow);

    arrow.addEventListener('click', mouseEnter);
    arrow.addEventListener('mouseleave', () => {
        // console.log('clear');
        clearInterval(interval);
        speed = 0;
    });
});

/* ************  infinity scroll ************** */
let maxScrollLeft = classGallery.scrollWidth - classGallery.clientWidth;
function scrollRun() {
    console.log(maxScrollLeft);
    console.log(classGallery.scrollLeft);
    if (maxScrollLeft == classGallery.scrollLeft) {
        renderProfileCard(studentsInfo);
        classGallery = document.querySelector('.class-gallery');
        maxScrollLeft = classGallery.scrollWidth - classGallery.clientWidth;
    }
}

classGallery.addEventListener('scroll', scrollRun);
