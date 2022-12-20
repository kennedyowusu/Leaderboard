import './style.css';

// Declare variables
const userName = document.getElementById('userName');
const userScore = document.getElementById('userScore');
const submitScore = document.getElementById('submitScore');
const mainLeftList = document.getElementById('mainLeftList');

let allUsersScores = [];

const computeScores = () => {
  const eachUserScore = {};
  eachUserScore.userName = userName.value;
  eachUserScore.userScore = userScore.value;

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
  } else {
    // allUsersScores = [];
    generateAllScores();
  }
};

const validateFields = () => {
  if (userName.value === '' || userScore.value === '') {
    alert('Please fill in all fields');
    return;
  }
  computeScores();
  generateAllScores();
};

// Event listeners
submitScore.addEventListener('click', (e) => {
  e.preventDefault();
  // if (userName.value === '' || userScore.value === '') {
  //   alert('Please fill in all fields');
  //   return;
  // }
  validateFields();
});

// On load
window.addEventListener('load', () => {
  retrieveScores();
});