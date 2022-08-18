// Formas de Selecionar Elementos

// ID  --- getElementById seleciona e retorna elementos do DOM

const animais = document.getElementById("animais");
console.log(animais);

const teste  = document.getElementById("teste");
console.log(teste);
// Retorna propriedade - texto da página sem as tags
// console.log(animais.innerText);


//Classe

const gridSection = document.getElementsByClassName("grid-section"); // retorna HTML COLLECTION

console.log(gridSection);
console.log(gridSection.length);
console.log(gridSection[0]);

//Tag

const ul = document.getElementsByTagName('ul');
console.log(ul);


// SELETOR GERAL ÚNICO - Query Slector
// querySelector retorna o primeiro elemento que combinar com o seu seletor CSS ( classe, id, tag)


const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);


const linkInterno = document.querySelector('[href^="#"]'); // ^significa começa com...
console.log(linkInterno);

// SELETOR GERAL LISTA

//  QuerySelectoAll - retorna todos os elementos compatíveis com o seletor CSS em uma NodeList

const animaisImg = document.querySelectorAll(' .animais img');
console.log(animaisImg);
console.log(animaisImg[1]);

// Diferenças entre HTML COllection e Nodelist
//atualiza as classes em tempo real

// A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática.

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

// add de classe
// primeiraUl.classList.add('grid-section');

console.log(gridSectionHTML);
console.log(gridSectionNode);


// ARRAY -LIKE
// HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList.

gridSectionNode.forEach(function(item, index){
  console.log(index);
});


// Transformando Array-Like em Arrays

const arrayGrid = Array.from(gridSectionHTML);
console.log(arrayGrid);

console.log("------------ F I M ----------------");