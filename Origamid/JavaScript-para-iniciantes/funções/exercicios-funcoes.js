// Crie uma função para verificar se um valor é Truthy
function verificaTruthy(valor1) {
  return !!valor1;
}
verificaTruthy(23);
verificaTruthy(null);

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function calculaPerimetro(valor) {
  return valor * 4;
}
calculaPerimetro(4);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`;
}

nomeCompleto("Laísa", "Saraiva");

// Crie uma função que verifica se um número é par

function parOuImpar(number) {
  var resto = number % 2;

  if (resto === 1) {
    return `O número ${number} é ímpar.`;
  } else {
    return `O número ${number} é par`;
  }
}
parOuImpar(4);

// Crie uma função que retorne o tipo d
// dado do argumento passado nela (typeof)

function verificaArgumento(parametro) {
  `O tipo de dado de${parametro} é ${typeof parametro}`;
}

verificaArgumento("Laíssa");
verificaArgumento(28);

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.

addEventListener("click", function () {
  console.log("Laíssa Saraiva");
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));
