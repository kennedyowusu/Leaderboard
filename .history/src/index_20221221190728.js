import './style.css';
import {
  computeTotal,
  fetchScores
} from './module/ludu.js';

// Declare variables
const userName = document.getElementById('userName');
const userScore = document.getElementById('userScore');
const submitScore = document.getElementById('submitScore');
const mainLeftList = document.getElementById('mainLeftList');
const refreshBtn = document.getElementById('refreshBtn');

// Declare empty array to store all scores
let allUsersScores = [];

// Declare empty object to store each user's score

// Reset form to empty
const resetForm = () => {
  userName.value = '';
  userScore.value = '';
};

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
  const scores = await computeTotal();
  allUsersScores = scores;
  generateAllScores();
};

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