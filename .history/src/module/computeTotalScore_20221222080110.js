// Compute total scores
const computeTotal = (player) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0f1v0Q2tWlXOz1X9f0Gv/scores/', {
    method: 'POST',
    body: JSON.stringify(player),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Accept: 'application/json',
    },
  }).then((response) => response.json());
};

export default computeTotal;