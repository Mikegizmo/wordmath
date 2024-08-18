const question = document.getElementById('question');
const answer = document.getElementById('answer');

const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');

checkButton.addEventListener('click', () => {
  console.log("You clicked the check button");
});

nextButton.addEventListener('click', () => {
  console.log("You clicked the next button");
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

  question.innerHTML = `${addition[0].termWord} plus ${addition[1].termWord} (${addition[0].termNumber} + ${addition[1].termNumber})`;

  console.log(addition[0].termNumber + addition[1].termNumber);

  const sum = addition[0].termNumber + addition[1].termNumber;
  
  const sumWord = addition[sum - 1].termWord;

  answer.innerHTML = `${sumWord} (${sum})`;
  