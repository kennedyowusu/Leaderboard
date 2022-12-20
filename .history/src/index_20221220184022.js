import './style.css';

// Declare variables
const userName = document.getElementById('userName');
const userScore = document.getElementById('userScore');
const submitScore = document.getElementById('submitScore');
const mainLeftList = document.getElementById('mainLeftList');

let allUsersScores = [];

const computeScores = () => {
  const eachUserScore = {};
  eachUserScore.name = userName.value;
  eachUserScore.score = userScore.value;

  allUsersScores.push(eachUserScore);

  // Save to local storage
  localStorage.setItem('all Users Scores', JSON.stringify(allUsersScores));
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
  if (localStorage.getItem('all Users Scores')) {
    allUsersScores = JSON.parse(localStorage.getItem('all Users Scores'));
  } else {
    // allUsersScores = [];
    generateAllScores();
  }
};

// const submitScore = () => {
//   if (userName.value === '' || userScore.value === '') {
//     alert('Please fill in all fields');
//     return;
//   }
//   computeScores();
//   generateAllScores();
// };

// Event listeners
submitScore.addEventListener('click', (e) => {
  e.preventDefault();
  if (userName.value === '' || userScore.value === '') {
    alert('Please fill in all fields');
  } else {
    computeScores();
    generateAllScores();
  }
  // submitScore();
});

// On load
window.addEventListener('load', () => {
  retrieveScores();
});