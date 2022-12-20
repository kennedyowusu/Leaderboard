import './style.css';

// Declare variables
const userName = document.getElementById('userName');
const userScore = document.getElementById('userScore');
const submit = document.getElementById('submit');
const mainLeftList = document.getElementById('mainLeftList');

const allUsersScores = [];
const eachUserScore = {};

const computeScores = () => {
  eachUserScore.name = userName.value;
  eachUserScore.score = userScore.value;
  allUsersScores.push(eachUserScore);

  // Save to local storage
  localStorage.setItem('allUsersScores', JSON.stringify(allUsersScores));
};

const generateAllScores = () => {
  // const allScores = JSON.parse(localStorage.getItem('allUsersScores'));
  // allScores.forEach((score) => {
  //   const li = document.createElement('li');
  //   li.innerHTML = `${score.name}: ${score.score}`;
  //   mainLeftList.appendChild(li);
  // });

  mainLeftList.innerHTML = JSON.parse(localStorage.getItem('allUsersScores')).map((score) => `<li>${score.name}: ${score.score}</li>`).join('');
};

const retrieveScores = () => {
  if (localStorage.getItem('allUsersScores')) {
    generateAllScores();
  } else {
    localStorage.setItem('allUsersScores', JSON.stringify([]));
  }
};

const submitScore = () => {
  computeScores();
  generateAllScores();
};

// Event listeners
submit.addEventListener('click', submitScore);

// On load
retrieveScores();