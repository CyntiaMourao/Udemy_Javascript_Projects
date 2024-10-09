'use strict';

// .......... Definir a lógica do jogo, i.e., como o jogo funciona.

// *** Primeiro temos que fazer disparar um número aleatório com o qual as tentativas do user serão comparadas. Esse número deve ser definido aqui porque assim se garante que só é definido uma vez:

let randomNum = Math.trunc(Math.random() * 20) + 1;
let scoreNum = 20;
let highscoreNum = 0;

// .......... A primeira coisa a fazer é verificar se foi introduzido algum valor no <input>: se a constante guess é diferente de zero.

// *** E o que acontece quando o número introduzido é igual ao "escolhido" aleatoriamente pelo sistema?

// *** E o que acontece quando o número é mais baixo? quanto mais baixo?

// *** E o que acontece quando o número é mais alto? quanto mais alto?

// *** Agora temos que trabalhar o "score": cada vez que introduzimos um valor errado o score baixa uma unidade: linhas de código introduzidas no "if".

document.querySelector('.btn.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent =
      '⛔ ATTENTION!! No number!';
  } else if (guess === randomNum) {
    document.querySelector('.message').textContent =
      '🥳 CONGRATULATION! You won!!!';
    document.querySelector('.number').textContent = randomNum;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Cálculo da "highscore!"
    if (scoreNum > highscoreNum) {
      highscoreNum = scoreNum;
    }
    document.querySelector('.highscore').textContent = highscoreNum;
  } else if (guess > randomNum) {
    if (scoreNum > 1) {
      document.querySelector('.message').textContent = '↗️ Too high!!!';
      scoreNum--;
      document.querySelector('.score').textContent = scoreNum;
    } else {
      document.querySelector('.message').textContent = 'GAME OVER!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < randomNum) {
    if (scoreNum > 1) {
      document.querySelector('.message').textContent = '↙️ Too low!!!';
      scoreNum--;
      document.querySelector('.score').textContent = scoreNum;
    } else {
      document.querySelector('.message').textContent = 'GAME OVER!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// fazendo com que o botão "Again" funcione, ou seja, fazendo o reset em todas as aterações efectuadas no jogo anterior e colocando o programa como se iniciou:

document.querySelector('.btn.again').addEventListener('click', function () {
  scoreNum = 20;
  randomNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = scoreNum;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
});
