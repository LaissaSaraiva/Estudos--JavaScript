// Retorne no console todas as imagens do site

const imagensSite = document.querySelectorAll("img");
console.log(imagensSite);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imagemImg = document.querySelectorAll('img[src^="./assets/img/imagem"]');
console.log(imagemImg);

// Selecione todos os links internos (onde o href começa com #)

const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao

const primeiroH2 = document.querySelector('.animais-descricao h2');

console.log(primeiroH2);

// Selecione o último p do site

const paragrafo = document.querySelectorAll("p");
console.log(paragrafo[paragrafo.length - 1]);
console.log(paragrafo[--paragrafo.length]);
const ultimoP = (paragrafo[paragrafo.length - 1]);
console.log(ultimoP.textContent);
