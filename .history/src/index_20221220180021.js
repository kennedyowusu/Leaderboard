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
  const allScores = JSON.parse(localStorage.getItem('allUsersScores'));
  allScores.forEach((score) => {
    const li = document.createElement('li');
    li.innerHTML = `${score.name}: ${score.score}`;
    mainLeftList.appendChild(li);
  });
};