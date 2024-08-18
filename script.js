const question = document.querySelector('.question');
const answer = document.querySelector('.answer');

const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');

checkButton.addEventListener('click', () => {
  answer.style.display = 'block';
});

nextButton.addEventListener('click', () => {
  getRandomProblem();
  answer.style.display = 'none';
});

const addition = 
  [
    {
      termWord: 'one',
      termNumber: 1
    },
    {
      termWord: 'two',
      termNumber: 2
    },
    {
      termWord: 'three',
      termNumber: 3
    },
    {
      termWord: 'four',
      termNumber: 4
    },
    {
      termWord: 'five',
      termNumber: 5
    },
    {
      termWord: 'six',
      termNumber: 6
    },
    {
      termWord: 'seven',
      termNumber: 7
    },
    {
      termWord: 'eight',
      termNumber: 8
    },
    {
      termWord: 'nine',
      termNumber: 9
    },
    {
      termWord: 'ten',
      termNumber: 10
    }
  ];

  const sumList = 
  [
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
    "twenty"
  ];

const getRandomProblem = () => {
  const addend1 = Math.floor(Math.random() * addition.length);
  const addend2 = Math.floor(Math.random() * addition.length);

  question.innerHTML = `${addition[addend1].termWord} plus ${addition[addend2].termWord} (${addition[addend1].termNumber} + ${addition[addend2].termNumber})`;

  const sum = addition[addend1].termNumber + addition[addend2].termNumber;
  
  const sumWord = sumList[sum - 1];

  answer.innerHTML = `${sumWord} (${sum})`;
};