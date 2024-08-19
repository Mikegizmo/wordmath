const termsJson = './terms.json';

const question = document.querySelector('.question');
const answer = document.querySelector('.answer');

const addButton = document.querySelector('.addition');
const subtractButton = document.querySelector('.subtraction');
const checkNext = document.querySelector('.checkNext');
const checkButton = document.querySelector('.check');
const nextAddButton = document.querySelector('.nextAdd');
const nextSubButton = document.querySelector('.nextSub');
const startOverButton = document.querySelector('.startOver');

addButton.addEventListener('click', () => {
  addButton.style.display = 'none';
  subtractButton.style.display = 'none';
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
  question.style.display = 'block';
  checkNext.style.display = 'flex';
  checkButton.style.display = 'flex';
  nextSubButton.style.display = 'inline-flex';
  startOverButton.style.display = 'flex';

  getRandomSubtraction();
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

startOverButton.addEventListener('click', () => {
  location.reload();
})

const answerList = 
[
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty",
  "twenty-one",
  "twenty-two",
  "twenty-two",
  "twenty-three",
  "twenty-four"
];

async function getRandomAddition() {
  const response = await fetch(termsJson);
  const terms = await response.json();

  const addend1 = Math.floor(Math.random() * terms.length);
  const addend2 = Math.floor(Math.random() * terms.length);

  question.innerHTML = `${terms[addend1].termWord} plus ${terms[addend2].termWord} (${terms[addend1].termNumber} + ${terms[addend2].termNumber})`;

  const sum = terms[addend1].termNumber + terms[addend2].termNumber;
  
  const sumWord = answerList[sum];

  answer.innerHTML = `${sumWord} (${sum})`;
};

async function getRandomSubtraction() {
  const response = await fetch(termsJson);
  const terms = await response.json();

  let minuend = Math.floor(Math.random() * terms.length);
  let subtrahend = Math.floor(Math.random() * terms.length);

  subtrahend > minuend ? [subtrahend, minuend] = [minuend, subtrahend] : true;

  question.innerHTML = `${terms[minuend].termWord} minus ${terms[subtrahend].termWord} (${terms[minuend].termNumber} - ${terms[subtrahend].termNumber})`;

  const sum = terms[minuend].termNumber - terms[subtrahend].termNumber;
  
  const sumWord = answerList[sum];

  answer.innerHTML = `${sumWord} (${sum})`;
};