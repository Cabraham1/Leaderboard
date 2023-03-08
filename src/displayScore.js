import addScore from './addScore';

const scorelist = document.querySelector('.score-list');

const displayScore = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/',
  );
  const data = await response.json();
  let dataArray = data.result;
  dataArray = dataArray.sort((a, b) => b.score - a.score);
  scorelist.innerHTML = '';
  dataArray.forEach((score) => {
    addScore(score.user, score.score);
  });
};

export default displayScore;