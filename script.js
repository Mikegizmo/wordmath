import Terms from './terms.js';
let width = screen.width;
let height = screen.height;

const question = document.querySelector('.question');
const answer = document.querySelector('.answer');

const addButton = document.querySelector('.addition');
const subtractButton = document.querySelector('.subtraction');
const multiplyButton = document.querySelector('.multiplication');

const numberLimits = document.querySelector('.numberLimits');
const multiLimits = document.querySelector('.multiLimits');
const limit0to6 = document.querySelector('.limit0to6');
const limit0to10 = document.querySelector('.limit0to10');
const limit0to12 = document.querySelector('.limit0to12');
const limit0to15 = document.querySelector('.limit0to15');
const limit0to20 = document.querySelector('.limit0to20');
const limit0to20multi = document.querySelector('.limit0to20multi');
const limit0to50 = document.querySelector('.limit0to50');
const limit0to100 = document.querySelector('.limit0to100');

const checkNext = document.querySelector('.checkNext');
const checkButton = document.querySelector('.check');
const nextAddButton = document.querySelector('.nextAdd');
const nextSubButton = document.querySelector('.nextSub');
const nextMultiButton = document.querySelector('.nextMulti');
const startOverButton = document.querySelector('.startOver');

// Button event listeners
addButton.addEventListener('click', () => {
  addButton.style.display = 'none';
  subtractButton.style.display = 'none';
  multiplyButton.style.display = 'none';

  numberLimits.style.display = 'flex';
  numberLimits.style.flexDirection = 'column';

  additionLimits();
});

subtractButton.addEventListener('click', () => {
  addButton.style.display = 'none';
  subtractButton.style.display = 'none';
  multiplyButton.style.display = 'none';

  numberLimits.style.display = 'flex';
  numberLimits.style.flexDirection = 'column';

  subtractionLimits();
});

multiplyButton.addEventListener('click', () => {
  addButton.style.display = 'none';
  subtractButton.style.display = 'none';
  multiplyButton.style.display = 'none';

  multiLimits.style.display = 'flex';
  multiLimits.style.flexDirection = 'column';

  multiplicationLimits();
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

let high;
// Addition functions
function additionLimits() { 
  limit0to10.addEventListener('click', () => {
    high = 10;
    numberLimits.style.display = 'none';
    getRandomAddition();
    displayAddCheckBtns();
  });
  limit0to20.addEventListener('click', () => {
    high = 20;
    numberLimits.style.display = 'none';
    getRandomAddition();
    displayAddCheckBtns();
  });
  limit0to50.addEventListener('click', () => {
    high = 50;
    numberLimits.style.display = 'none';
    getRandomAddition();
    displayAddCheckBtns();
  });
  limit0to100.addEventListener('click', () => {
    high = 100;
    numberLimits.style.display = 'none';
    getRandomAddition();
    displayAddCheckBtns();
  });
};

const displayAddCheckBtns = () => {
  question.style.display = 'block';
  checkNext.style.display = 'flex';
  checkButton.style.display = 'flex';
  nextAddButton.style.display = 'inline-flex';
  startOverButton.style.display = 'flex';
};

function getRandomAddition() {
  const addend1 = Math.floor(Math.random() * (high + 1));
  const addend2 = Math.floor(Math.random() * (high + 1));

  width < height ? 
    question.innerHTML = `${Terms[addend1]} plus ${Terms[addend2]}<br />(${addend1} + ${addend2})`:
    question.innerHTML = `${Terms[addend1]} plus ${Terms[addend2]} (${addend1} + ${addend2})`;

  const sum = addend1 + addend2;
  
  const sumWord = Terms[sum];

  width < height ?
    answer.innerHTML = `${sumWord}<br />(${sum})`:
    answer.innerHTML = `${sumWord} (${sum})`;
};

// Subtraction functions
function subtractionLimits() { 
  limit0to10.addEventListener('click', () => {
    high = 10;
    numberLimits.style.display = 'none';
    getRandomSubtraction();
    displaySubCheckBtns();
  });
  limit0to20.addEventListener('click', () => {
    high = 20;
    numberLimits.style.display = 'none';
    getRandomSubtraction();
    displaySubCheckBtns();
  });
  limit0to50.addEventListener('click', () => {
    high = 50;
    numberLimits.style.display = 'none';
    getRandomSubtraction();
    displaySubCheckBtns();
  });
  limit0to100.addEventListener('click', () => {
    high = 100;
    numberLimits.style.display = 'none';
    getRandomSubtraction();
    displaySubCheckBtns();
  });
}; 

const displaySubCheckBtns = () => {
  question.style.display = 'block';
  checkNext.style.display = 'flex';
  checkButton.style.display = 'flex';
  nextSubButton.style.display = 'inline-flex';
  startOverButton.style.display = 'flex';
};

function getRandomSubtraction() {
  let minuend = Math.floor(Math.random() * (high + 1));
  let subtrahend = Math.floor(Math.random() * (high + 1));

  subtrahend > minuend ? [subtrahend, minuend] = [minuend, subtrahend] : true;

  width < height ?
    question.innerHTML = `${Terms[minuend]} minus ${Terms[subtrahend]}<br />(${minuend} - ${subtrahend})`:
    question.innerHTML = `${Terms[minuend]} minus ${Terms[subtrahend]} (${minuend} - ${subtrahend})`;

  const difference = minuend - subtrahend;
  
  const differenceWord = Terms[difference];

  width < height ?
    answer.innerHTML = `${differenceWord}<br />(${difference})`:
    answer.innerHTML = `${differenceWord} (${difference})`;
};

// Multiplication functions
function multiplicationLimits() { 
  limit0to6.addEventListener('click', () => {
    high = 6;
    multiLimits.style.display = 'none';
    getRandomMultiplication();
    displayMultiCheckBtns();
  });
  limit0to12.addEventListener('click', () => {
    high = 12;
    multiLimits.style.display = 'none';
    getRandomMultiplication();
    displayMultiCheckBtns();
  });
  limit0to15.addEventListener('click', () => {
    high = 15;
    multiLimits.style.display = 'none';
    getRandomMultiplication();
    displayMultiCheckBtns();
  });
  limit0to20multi.addEventListener('click', () => {
    high = 20;
    multiLimits.style.display = 'none';
    getRandomMultiplication();
    displayMultiCheckBtns();
  });
};

const displayMultiCheckBtns = () => {
  question.style.display = 'block';
  checkNext.style.display = 'flex';
  checkButton.style.display = 'flex';
  nextMultiButton.style.display = 'inline-flex';
  startOverButton.style.display = 'flex';
}

function getRandomMultiplication() {
  const multiplicand = Math.floor(Math.random() * (high + 1));
  const multiplier = Math.floor(Math.random() * (high + 1));

  width < height ?
    question.innerHTML = `${Terms[multiplicand]} times ${Terms[multiplier]}<br />(${multiplicand} x ${multiplier})`:
    question.innerHTML = `${Terms[multiplicand]} times ${Terms[multiplier]} (${multiplicand} x ${multiplier})`;

  const product = multiplicand * multiplier;
  
  const productWord = Terms[product];

  width < height ?
    answer.innerHTML = `${productWord}<br />(${product})`:
    answer.innerHTML = `${productWord} (${product})`;
};