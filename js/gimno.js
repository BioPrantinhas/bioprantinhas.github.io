// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

// caminho para onde as imagens estão hospedadas
const LocalImagens = 'imgs/gimno',
  // array com o nome das 2 imagens da galeria
  nomesDasImagens = [
    'gimno1.jpg',
    'gimno2.jpg',
  ];

// o índice da imagem sendo mostrada
// (inicialmente, é a imagem 0: 'philae-parts.jpg')
let indiceDaFotoCorrente = 0;
// ...

let imgSlideEl = document.querySelector('#slide');
let proxEl = document.querySelector('#proximo');
let antEl = document.querySelector('#anterior');

antEl.addEventListener('click', function(e) {
  indiceDaFotoCorrente--;
  if(indiceDaFotoCorrente < 0) {
    indiceDaFotoCorrente = 1;
  }
  imgSlideEl.src = LocalImagens + nomesDasImagens[indiceDaFotoCorrente];
});

proxEl.addEventListener('click', function(e) {
  indiceDaFotoCorrente++;
  if(indiceDaFotoCorrente > 1) {
    indiceDaFotoCorrente = 0;
  }
  imgSlideEl.src = LocalImagens + nomesDasImagens[indiceDaFotoCorrente];
});
