const listaAnimais = document.querySelector(".animais-lista");
console.log(listaAnimais);

// Height + padding
console.log(listaAnimais.clientHeight);

// height + padding + border
console.log(listaAnimais.offsetHeight);

// height total, mesmo dentro de scroll
const alturaTotal = listaAnimais.scrollHeight;
console.log(alturaTotal);
//  Mesma coisa width

// Distância entre o topo do elemento e o topo da página
console.log(listaAnimais.offsetTop);

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
console.log(listaAnimais.offsetLeft);

const primeiroH2 = document.querySelector("h2");

const propriedadesH2 = primeiroH2.getBoundingClientRect;

console.log(propriedadesH2);

console.log(primeiroH2.offsetLeft);

// Window

console.log(
  window.innerWidth, // width do janela
  window.outerWidth, // soma dev tools também
  window.innerHeight, // height do janela
  window.outerHeight,// soma a barra de endereço
  window.pageYOffset,// distância total do scroll vertical
  window.pageXOffset // distância total do scroll horizontal
)


// MATCHMEDIA();
// Utilize um media-querie como no CSS para verificar a largura do browser
const small = window.matchMedia('(max-width: 600px');

if(small.matches) {
  console.log("Usuário Mobile")
  } else {
    console.log("Usuário Desktop")
  }
console.log(small)
;