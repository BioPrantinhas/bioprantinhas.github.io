let botaoEl = document.querySelector('#alterna-menu');
let bodyEl = document.querySelector('body');

function alternaMenu() {
  bodyEl.classList.toggle('menu-visivel');
}

botaoEl.addEventListener('click', alternaMenu);

/*Código feito pelo CoutinhoGod <3 */
