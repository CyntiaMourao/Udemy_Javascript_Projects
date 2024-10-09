'use strict';

// A primeira coisa a fazer quando se inicia um projecto JavaScript é seleccionar todos os elementos HTML necessários, sobre os quais se irá desenvolver as acções, e guardá-los em variáveis:
const btnShowModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// Criando uma função para evitar repetição de código - ATENÇÃO!! Quando passamos a função como argumento no "addEventListener", não a invocamos (o que é feito adicionando os "()"), mas sim apenas a inserimos como um argumento.
const openModel = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Mas preciso seleccionar um específico para atribuir uma dada acção - usando o loop for para isso:
for (let i = 0; i < btnShowModal.length; i++) {
  // ao clicar no elemento faz aparecer a janela "modal" - removendo a class "hidden":
  btnShowModal[i].addEventListener('click', openModel);
}

// ao clicar na cruz de "fechar", vamos "esconder" a janela e retirar o efeito "blur" -  adicionando novamente a class "hidden":

btnCloseModal.addEventListener('click', closeModal);

// Agora vamos obter o mesmo efeito de fechar a janela e retirar o overlay - mas em vez de ser a clicar na cruz será clicando em qualquer lugar fora da janela, que é o mesmo que dizer, clicando no overlay:

overlay.addEventListener('click', closeModal);

// E por último, queremos o mesmo comportamento mas ao clicar na tecla ESC do teclado (ou seja, como responder a eventos de teclado - "global events": vai "ouvir" todo o documento e não apenas um elemento específico - não importa onde o evento aconteça na página; ele vai sempre disparar a acção especificada):

document.addEventListener('keydown', function (e) {
  // console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      // se a tecla ESC é premida E o elemento com classe "modal" NÃO contém a classe "hidden", então é porque está visível, logo pode ser fechado, executando a função "closeModal()"...
      closeModal();
    }
  }
);
