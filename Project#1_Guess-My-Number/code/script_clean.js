'use strict';

// .......... Refactoring Our Code: The DRY Principle (DO NOT REPEAT YOURSELF!!!).......... \\

// *** 1 - Identificar os blocos de código que são iguais ou muito semelhantes;

// *** 2 - Inserir esse bloco que se repete dentro de uma função e chamá-la no contexto apropriado;

let randomNum = Math.trunc(Math.random() * 20) + 1;
let scoreNum = 20;
let highscoreNum = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message
}

document.querySelector('.btn.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessage('⛔ ATTENTION!! No number!');

    // Compara o valor do user com o valor do computador: se for igual....
  } else if (guess === randomNum) {
    displayMessage('🥳 CONGRATULATION! You won!!!');
    document.querySelector('.number').textContent = randomNum;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (scoreNum > highscoreNum) {
      highscoreNum = scoreNum;
    }
    document.querySelector('.highscore').textContent = highscoreNum;

    // Compara o valor do user com o valor do computador: se for diferente....
  } else if (guess !== randomNum) {
    if (scoreNum > 1) {
      displayMessage(guess > randomNum ? '↗️ Too high!!!' : '↗️ Too low!!!');
      scoreNum--;
      document.querySelector('.score').textContent = scoreNum;
    } else {
      displayMessage('GAME OVER!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Faz o reset do jogo...

document.querySelector('.btn.again').addEventListener('click', function () {
  scoreNum = 20;
  randomNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = scoreNum;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
});
