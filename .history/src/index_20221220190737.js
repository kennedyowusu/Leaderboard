import './style.css';

// Declare variables
const userName = document.getElementById('userName');
const userScore = document.getElementById('userScore');
const submitScore = document.getElementById('submitScore');
const mainLeftList = document.getElementById('mainLeftList');

// Declare empty array to store all scores
let allUsersScores = [];

// Declare empty object to store each user's score
const eachUserScore = {};

const computeScores = () => {
  eachUserScore.userName = userName.value;
  eachUserScore.userScore = userScore.value;

  // Push each user's score to the array
  allUsersScores.push(eachUserScore);

  // Save to local storage
  localStorage.setItem('scores', JSON.stringify(allUsersScores));
};

const generateAllScores = () => {
  mainLeftList.innerHTML = '';
  allUsersScores.forEach((score) => {
    const li = `
    <li>${score.userName}: ${score.userScore}</li>
    `;
    mainLeftList.innerHTML += li;

    // reset form to empty
    userName.value = '';
    userScore.value = '';
  });
};

const retrieveScores = () => {
  if (localStorage.getItem('scores')) {
    allUsersScores = JSON.parse(localStorage.getItem('scores'));
  }
  generateAllScores();
};

const validateFields = () => {
  if (userName.value === '' || userScore.value === '') {
    userName.style.border = '1px solid red';
    userScore.style.border = '1px solid red';
    return;
  }
  computeScores();
  generateAllScores();
};

// Event listeners
submitScore.addEventListener('click', (e) => {
  e.preventDefault();

  validateFields();
});

// On load
window.addEventListener('load', () => {
  retrieveScores();
});