'use strict';

// --- Seleccionando elementos --- \\
const player0Elem = document.querySelector('.player--0');
const player1Elem = document.querySelector('.player--1');
const score0Elem = document.querySelector('#score--0');
const score1Elem = document.getElementById('score--1');
const current0Elem = document.getElementById('current--0');
const current1Elem = document.getElementById('current--1');
const diceElem = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');

let scores, currentScore, activePlayer, playing; // Estas funções são aqui declaradas para depois serem usadas dentro das funções.

// --- Condições iniciais --- \\

const init = function () {
  scores = [0, 0]; // Valor do score acumulado
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0Elem.textContent = 0;
  score1Elem.textContent = 0;
  current0Elem.textContent = 0;
  current1Elem.textContent = 0;

  diceElem.classList.add('hidden');
  player0Elem.classList.remove('player--winner');
  player1Elem.classList.remove('player--winner');
  player0Elem.classList.add('player--active');
  player1Elem.classList.remove('player--active');
};

init();

// Em vez de repetir este bloco de código que faz trocar de player no 2 event listeners (rollBtn e holdBtn), cria-se uma função que é invocada naqueles dois events. Aqui não necessita de parâmetro porque o bloco de código é exactamente igual.
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  // Mudando de player:
  activePlayer = activePlayer === 0 ? 1 : 0; // Se o active player for o "0", então passa a ser "1"; se não for o "0" é porque é o "1" e então passa para o "0".
  player0Elem.classList.toggle('player--active');
  player1Elem.classList.toggle('player--active');
};

// --- Ao clicar no botão "Roll Dice" aparece o dado com o valor correspondente ao valor aleatório gerado --- \\
rollBtn.addEventListener('click', function () {
  if (playing) {
    // Criando um número aleatório:
    let randomNum = Math.trunc(Math.random() * 6) + 1;
    //console.log(randomNum);
    // Fazendo aparecer o dado correspondente a esse número aleatório:
    diceElem.classList.remove('hidden');
    diceElem.src = `dice-${randomNum}.png`;

    // Passando o valor do dado para o "Current" se o randomNum for diferente de 1:
    if (randomNum !== 1) {
      currentScore += randomNum; //currentScore = currentScore + randomNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Aqui faz o reset nos scores:
      switchPlayer();
    }
  }
});

holdBtn.addEventListener('click', function () {
  // Adicionando o score total ao score do active player:
  scores[activePlayer] += currentScore; // scores[activePlayer] = scores[activePlayer] + currentScore
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];

  // Verificando se o score acumulado do active player é >= 100
  if (scores[activePlayer] >= 100) {
    // Acaba o jogo:
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
  } else {
    // Se for, acaba o jogo e muda para o outro player:
    switchPlayer();
  }
});

// Reseting do jogo
newBtn.addEventListener('click', init); // Não chamamos a função init, é o click que o fará; por isso não em os parênteses.
