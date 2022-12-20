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
  mainLeftList.innerHTML = '';
  allUsersScores.forEach((score) => {
    const li = `
    <li>${score.name}: ${score.score}</li>
    `;
    mainLeftList.innerHTML += li;

    // reset form to empty
    userName.value = '';
    userScore.value = '';
  });
};

const retrieveScores = () => {
  const scores = JSON.parse(localStorage.getItem('allUsersScores'));
  if (scores) {
    allUsersScores.push(...scores);
    generateAllScores();
  }
};

const submitScore = () => {
  if (userName.value === '' || userScore.value === '') {
    alert('Please fill in all fields');
    return;
  }
  computeScores();
  generateAllScores();
};

// Event listeners
submit.addEventListener('click', (e) => {
  e.preventDefault();
  submitScore();
});

// On load
window.addEventListener('load', () => {
  retrieveScores();
});