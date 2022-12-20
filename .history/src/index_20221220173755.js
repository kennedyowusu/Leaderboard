import './style.css';

// Declare variables
const userName = document.getElementById('userName');
const userScore = document.getElementById('userScore');
const submit = document.getElementById('submit');
const mainLeftList = document.getElementById('mainLeftList');

const usersScores = [];

const generateScores = () => {
  for (let i = 0; i < 5; i++) {
    usersScores.push(Math.floor(Math.random() * 100));
  }
};