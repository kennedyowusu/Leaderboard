const ludu = () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/', {
    method: 'POST',
    body: JSON.stringify({
      name: 'Ludu',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Accept: 'application/json',
    },
  }).then((response) => response.json());
};

const getScores = () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0f1v0Q2tWlXOz1X9f0Gv/scores/', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Accept: 'application/json',
    },
  }).then((response) => response.json());
};

// const postScores = () => {
//  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0f1v0Q2tWlXOz1X9f0Gv/scores/', {
//   method: 'POST',
//   body: JSON.stringify({
//    user: 'Ludu',
//    score: 100,

//   }),
//  }
// }

export default { ludu, getScores };