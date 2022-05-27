//  Condições if, else if, else

var possuiGraduacao = true;
var possuiDoutorado = true;

if (possuiGraduacao) {
  console.log("Possui Graduação");
} else if (possuiDoutorado) {
  console.log("Possui Doutorado");
} else {
  console.log("Não possui nada.");
}

var nome = ""; // String vazia tem valor false

if (!nome) {
  console.log(nome);
} else {
  console.log("Nome não existe");
}

// Dica, você pode utilizar o !! para verificar se uma expressão é Truthy ou Falsy

console.log(!!null);

var x = "10";
console.log(x == 10); // true - Se o valor é igual
console.log( x === 10); // false - Se o tipo de var iaval é igual string === string / numero === numero

// ideal usar ===

// OPERADORES LÓGICOS &&
true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true

// Se ambos os valores forem true ele irá retornar o último valor verificado Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos


// OPERADORES LÓGICOS ||Retorna o primeiro valor true que encontrar

true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true


// Switch Com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.

var corFavorita = "Azul";

switch(corFavorita){
  case "Azul":
    console.log("Olhe para o Céu");
    break;
  case "Vermelho":
    console.log("Olhe para as Rosas");
    break;
  case "Amarelo":
    console.log("Olhe para o Sol");
    break;
  default:
    console.log("Feche os Olhos");
}