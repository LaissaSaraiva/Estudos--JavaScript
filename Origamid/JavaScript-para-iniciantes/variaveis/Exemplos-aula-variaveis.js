// Variáveis! - Responsáveis por guardar o nome na memória!

// Inicia com a palavra var, let ou const

var nome = "Laíssa";
var idade = 31;
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade, nome);

// Conceito DRY ( Dont repeat yourself)

var preco = 25;
var totalComprado = 5;
var totalPreco = preco * totalComprado;

console.log(totalPreco);

// Outra forma de declarar variáveis

var nome = "Laíssa",
  cidade = "Rio de Janeiro",
  idade = 31;

console.log(nome, cidade, idade);

/*  Variáveis sem definição. Você pode atribuir sem dar um valor*/

var comida;
console.log(comida);

// ou

var comida;
console.log(comida);
comida = "Pizza";
console.log(comida);

// Conceito HOISTING =  a variaveis São movidas para cima do código, porém o valor atribuído não é movido. Elas ficam 'undefined até chegar a linha onde é feita a atribuição;

// MUDAR O VALOR ATRIBUÍDO
// É possível mudar os valores atribuídos a variáveis declaradas com var e let. Porém não é possível modificar valores das declaradas com const

var idade = 28;
idade = 29;

let preco1 = 50;
preco1 = 25;

const possuiFaculdade1 = true;
//possuiFaculdade = false; // Retorna um erro


