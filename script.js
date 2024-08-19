const termsJson = './terms.json';

const question = document.querySelector('.question');
const answer = document.querySelector('.answer');

const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');

checkButton.addEventListener('click', () => {
  answer.style.display = 'block';
});

nextButton.addEventListener('click', () => {
  getRandomProblem2();
  answer.style.display = 'none';
});

const sumList = 
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

async function getRandomProblem() {
  const response = await fetch(termsJson);
  const terms = await response.json();

  const addend1 = Math.floor(Math.random() * terms.length);
  const addend2 = Math.floor(Math.random() * terms.length);

  question.innerHTML = `${terms[addend1].termWord} plus ${terms[addend2].termWord} (${terms[addend1].termNumber} + ${terms[addend2].termNumber})`;

  const sum = terms[addend1].termNumber + terms[addend2].termNumber;
  
  const sumWord = sumList[sum];

  answer.innerHTML = `${sumWord} (${sum})`;
};

async function getRandomProblem2() {
  const response = await fetch(termsJson);
  const terms = await response.json();

  let minuend = Math.floor(Math.random() * terms.length);
  let subtrahend = Math.floor(Math.random() * terms.length);

  subtrahend > minuend ? [subtrahend, minuend] = [minuend, subtrahend] : true;

  question.innerHTML = `${terms[minuend].termWord} minus ${terms[subtrahend].termWord} (${terms[minuend].termNumber} - ${terms[subtrahend].termNumber})`;

  const sum = terms[minuend].termNumber - terms[subtrahend].termNumber;
  
  const sumWord = sumList[sum];

  answer.innerHTML = `${sumWord} (${sum})`;
};