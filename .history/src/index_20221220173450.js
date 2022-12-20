import './style.css';

// Declare variables
const name = document.getElementById('name');
const score = document.getElementById('score');
const btn = document.getElementById('btn');
const list = document.getElementById('list');

const usersScores = [];

const generateScores = () => {
  for (let i = 0; i < 5; i++) {
    usersScores.push(Math.floor(Math.random() * 100));
  }
};