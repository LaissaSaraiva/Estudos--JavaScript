var nome1 = "Loren";
var idade = 31;
var time;

// Identificação de variávesi ( typerof)
console.log(typeof nome);

// Tipos String =

var nome = "Laíssa",
  sobrebome = "Saraiva",
  nomeCompleto = nome + " " + sobrebome;

console.log("Meu nome completo é: " + nomeCompleto);

var ano = '2018';
var mes = 08;
console.log(ano + mes); // 201808 - String + number = string

var ano1 = 2018;
var mes = 08;
console.log(ano1 + mes); //2026 number + number = number


// Template String ${}

var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' goals';
console.log(frase1);

var frase2 = `Romário fez ${gols} gols`;
console.log(frase2);

// Você deve passar expressões variáveis dentro de ${}