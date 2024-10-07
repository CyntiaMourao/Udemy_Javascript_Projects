'use strict';

// .......... Definir a lógica do jogo, i.e., como o jogo funciona.

// *** Primeiro temos que fazer disparar um número aleatório com o qual as tentativas do user serão comparadas. Esse número deve ser definido aqui porque assim se garante que só é definido uma vez:

let scoreNum = Number(document.querySelector('.score').textContent);

const randomNum = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = randomNum;

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
}})