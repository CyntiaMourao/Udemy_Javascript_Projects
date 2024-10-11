'use strict';

// --- Seleccionando elementos --- \\
const score0Elem = document.querySelector('#score--0');
const score1Elem = document.getElementById('score--1');
const current0Elem = document.getElementById('current--0');
const current1Elem = document.getElementById('current--1');
const diceElem = document.querySelector('.dice');
const rollDgit iceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

// --- Condições iniciais --- \\
score0Elem.textContent = 0;
score1Elem.textContent = 0;
diceElem.classList.add('hidden');
let currentScore = 0;

// --- Ao clicar no botão "Roll Dice" aparece o dado com o valor correspondente ao valor aleatório gerado --- \\

rollDiceBtn.addEventListener('click', function () {
  // Criando um número aleatório:
  let randomNum = Math.trunc(Math.random() * 6) + 1;
  //console.log(randomNum);
  // Fazendo aparecer o dado correspondente a esse número aleatório:
  diceElem.classList.remove('hidden');
  //   console.log(diceElem.attributes);
  //   console.log(diceElem.attributes.src.nodeValue);
  diceElem.src = `dice-${randomNum}.png`;

  // Passando o valor do dado para o "Current" se o randomNum for diferente de 1:

//   console.log(currentScore('current--0'))
  
  if (randomNum !== 1) {    
    currentScore += randomNum; //currentScore = currentScore + randomNum;
    current0Elem.textContent = currentScore; // para mudar depois conforme o player
  } else {

  }


  
});

holdBtn.addEventListener('click', function () {});
