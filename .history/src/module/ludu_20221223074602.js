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

export default ludu;