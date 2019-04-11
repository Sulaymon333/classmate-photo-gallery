// **** Get DOM elements ****
const classGallery = document.querySelector('.class-gallery');


const buildProfileCard = (firstName,
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
    skills) => {
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
        buildProfileCard(firstName,
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
            skills)
    });
}

renderProfileCard(studentsInfo)


const profileCards = document.querySelectorAll('.profile-card');

function flipCard() {
    this.classList.toggle('flip');
}
profileCards.forEach(profileCard => profileCard.addEventListener('click', flipCard));
// ***** hover function ****
function toggleOpen() {
    console.log('Hello');
    this.classList.toggle('open');
}