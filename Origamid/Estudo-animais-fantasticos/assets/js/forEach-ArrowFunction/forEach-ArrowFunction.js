// ForEach - Método
// Constantemente vamos selecionar uma lista de itens do DOM. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.


const imgs = document.querySelectorAll('img');
console.log(imgs); // retorna NodeList


// PARÂMETROS DO FOREACH
// O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Esse função pode receber três parâmetros: valorAtual, index e array;


imgs.forEach(function(item, index, array){
console.log(item, index, array);
});

//function (item, index, array ) - callback recebe parametros
// item  é o item em si; nesse caso a <img> - pode ser qualquer nome;
//index - posição do item na array
// array

// forEach é um método de Array, alguns objetos array-like (NODELIST) possuem este método. Caso não possua (HTMLCollection), o ideal é transformá-los em uma array.


const titulos = document.getElementsByClassName('titulo'); //HTMLCollection
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
console.log(item);
});


// Arrow Function
// Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.


const h2 = document.querySelectorAll("h2");
let i = 0;

h2.forEach((item, index)=>{
  console.log(item, index);
});
//versão reduzida - nova
h2.forEach(() => console.log(i++));

