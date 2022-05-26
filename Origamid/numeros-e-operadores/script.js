//NÚMEROS
var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000 Precisão para até 15 digitos

var idade1 = 2e2;  // exponecial precisão de até 15 dígitos
console.log(idade1);

// OPERADORES ARITMÉTICOS
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

// Lembrando que soma + em Strings serve para concatenar


var total = 10 + 5 + 10;
var divisao = 200 / 5;
var modulo = 13 % 3;

console.log(total);
console.log(modulo);


var total = (20 + 5) * 7 ;

console.log(total);

// OPERADORES ARITMÉTICOS UNÁRIOS

var i = 0;
console.log(i++);
console.log(i);


var x = 0;
console.log(++x);
console.log(x);

var anos = '27';
var numero  = 5

var somaIdade = anos + numero
console.log( typeof somaIdade); // string


var anos1 = '27';
var numero1  = 5

var somaIdade1 = +anos1 + numero1 //OPERADORES ARITMÉTICOS UNÁRIOS O + e - tenta transformar o valor seguinte em número
console.log( typeof somaIdade1); // number