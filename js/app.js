
// Declare Variables
const card = document.querySelector('.card-container');
// const cardFront = document.querySelector('.card-obverse');
// const cardBack = document.querySelector('.card-reverse');

// Create Event Listeners
// cardFront.addEventListener('click', rotateCard);
// cardBack.addEventListener('click', rotateCard);
card.addEventListener('click', rotateCard);

// Create Functions
function rotateCard(e) {
    // console.log(e);
    console.log(e.currentTarget.classList);
    e.currentTarget.classList.toggle('is-flipped');
}

// TEST FUNCTION
// alert("test");