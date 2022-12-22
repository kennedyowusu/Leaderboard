import './style.css';
import { computeTotal, fetchScores } from './module/ludu.js';
import {
  userName,
  userScore,
  submitScore,
  mainLeftList,
  refreshBtn,
} from './module/variables.js';
import resetForm from './module/reset_form.js';

// Declare empty array to store all scores
let allUsersScores = [];

// Declare empty object to store each user's score

const computeScores = () => {
  const eachUserScore = {};
  eachUserScore.userName = userName.value;
  eachUserScore.userScore = userScore.value;

  // Push each user's score to the array
  allUsersScores.push(eachUserScore);

  // Sort the array in descending order
  // allUsersScores.sort((a, b) => b.userScore - a.userScore);

  computeTotal(allUsersScores);
  resetForm();

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
    resetForm();
  });
};

// Refresh button to refresh the scores
const refreshScores = async () => {
  const scores = await fetchScores();
  allUsersScores = scores;
  generateAllScores();
};

refreshBtn.addEventListener('click', () => {
  refreshScores();
});

const retrieveScores = () => {
  if (localStorage.getItem('scores')) {
    allUsersScores = JSON.parse(localStorage.getItem('scores'));
  }
  generateAllScores();
};

// Event listeners
submitScore.addEventListener('click', (e) => {
  e.preventDefault();
  if (userName.value === '' || userScore.value === '') {
    userName.style.border = '1px solid red';
    userScore.style.border = '1px solid red';
    return;
  }
  computeScores();
  generateAllScores();
});

// On load
window.addEventListener('load', () => {
  retrieveScores();
});