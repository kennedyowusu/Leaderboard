const ludu = () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: JSON.stringify({
      name: 'ludu',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      // Accept: 'application/json',
    },
  }).then((response) => response.json());
};

// Fetch scores from API
const fetchScores = async () => {
  const apiResponse = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0f1v0Q2tWlXOz1X9f0Gv/scores/');
  const data = await apiResponse.json();
  const scores = data.result;
  return scores;
};

// Compute total scores
const computeTotal = (scores) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0f1v0Q2tWlXOz1X9f0Gv/scores/', {
    method: 'POST',
    body: JSON.stringify(scores),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      // Accept: 'application/json',
    },
  }).then((response) => response.json());
};

export {
  ludu,
  fetchScores,
 computeTotal,
};