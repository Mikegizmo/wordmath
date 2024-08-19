const termsJson = './terms.json';
import Answers from './answers.js';

const question = document.querySelector('.question');
const answer = document.querySelector('.answer');

const addButton = document.querySelector('.addition');
const subtractButton = document.querySelector('.subtraction');
const multiplyButton = document.querySelector('.multiply');
const checkNext = document.querySelector('.checkNext');
const checkButton = document.querySelector('.check');
const nextAddButton = document.querySelector('.nextAdd');
const nextSubButton = document.querySelector('.nextSub');
const nextMultiButton = document.querySelector('.nextMulti');
const startOverButton = document.querySelector('.startOver');

addButton.addEventListener('click', () => {
  addButton.style.display = 'none';
  subtractButton.style.display = 'none';
  multiplyButton.style.display = 'none';
  question.style.display = 'block';
  checkNext.style.display = 'flex';
  checkButton.style.display = 'flex';
  nextAddButton.style.display = 'inline-flex';
  startOverButton.style.display = 'flex';

  getRandomAddition();
});

subtractButton.addEventListener('click', () => {
  addButton.style.display = 'none';
  subtractButton.style.display = 'none';
  multiplyButton.style.display = 'none';
  question.style.display = 'block';
  checkNext.style.display = 'flex';
  checkButton.style.display = 'flex';
  nextSubButton.style.display = 'inline-flex';
  startOverButton.style.display = 'flex';

  getRandomSubtraction();
});

multiplyButton.addEventListener('click', () => {
  addButton.style.display = 'none';
  subtractButton.style.display = 'none';
  multiplyButton.style.display = 'none';
  question.style.display = 'block';
  checkNext.style.display = 'flex';
  checkButton.style.display = 'flex';
  nextMultiButton.style.display = 'inline-flex';
  startOverButton.style.display = 'flex';

  getRandomMultiplication();
});

checkButton.addEventListener('click', () => {
  answer.style.display = 'block';
});

nextAddButton.addEventListener('click', () => {
  getRandomAddition();
  answer.style.display = 'none';
});

nextSubButton.addEventListener('click', () => {
  getRandomSubtraction();
  answer.style.display = 'none';
});

nextMultiButton.addEventListener('click', () => {
  getRandomMultiplication();
  answer.style.display = 'none';
});

startOverButton.addEventListener('click', () => {
  location.reload();
});

async function getRandomAddition() {
  const response = await fetch(termsJson);
  const terms = await response.json();

  const addend1 = Math.floor(Math.random() * terms.length);
  const addend2 = Math.floor(Math.random() * terms.length);

  question.innerHTML = `${terms[addend1].termWord} plus ${terms[addend2].termWord} (${terms[addend1].termNumber} + ${terms[addend2].termNumber})`;

  const sum = terms[addend1].termNumber + terms[addend2].termNumber;
  
  const sumWord = Answers[sum];

  answer.innerHTML = `${sumWord} (${sum})`;
};

async function getRandomSubtraction() {
  const response = await fetch(termsJson);
  const terms = await response.json();

  let minuend = Math.floor(Math.random() * terms.length);
  let subtrahend = Math.floor(Math.random() * terms.length);

  subtrahend > minuend ? [subtrahend, minuend] = [minuend, subtrahend] : true;

  question.innerHTML = `${terms[minuend].termWord} minus ${terms[subtrahend].termWord} (${terms[minuend].termNumber} - ${terms[subtrahend].termNumber})`;

  const difference = terms[minuend].termNumber - terms[subtrahend].termNumber;
  
  const differenceWord = Answers[difference];

  answer.innerHTML = `${differenceWord} (${difference})`;
};

async function getRandomMultiplication() {
  const response = await fetch(termsJson);
  const terms = await response.json();

  const multiplicand = Math.floor(Math.random() * terms.length);
  const multiplier = Math.floor(Math.random() * terms.length);

  question.innerHTML = `${terms[multiplicand].termWord} times ${terms[multiplier].termWord} (${terms[multiplicand].termNumber} x ${terms[multiplier].termNumber})`;

  const product = terms[multiplicand].termNumber * terms[multiplier].termNumber;
  
  const productWord = Answers[product];

  answer.innerHTML = `${productWord} (${product})`;
};