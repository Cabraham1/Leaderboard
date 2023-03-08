import 'lodash';
import './style.css';
import displayScore from './displayScore';
import submitScore from './userSubmission';

displayScore();

const refreshbtn = document.getElementById('refresh-btn');
const submitbtn = document.getElementById('submit-btn');

refreshbtn.addEventListener('click', () => {
  displayScore();
});

submitbtn.addEventListener('click', () => {
  submitScore();
});