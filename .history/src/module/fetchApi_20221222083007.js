// Fetch scores from API
const fetchScores = async () => {
  const apiResponse = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0f1v0Q2tWlXOz1X9f0Gv/scores/');
  const data = await apiResponse.json();
  const scores = await data.result;
  return scores;
};

export default fetchScores;