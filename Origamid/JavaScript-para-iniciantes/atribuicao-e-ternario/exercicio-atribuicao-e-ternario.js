// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var valor = 1000;
valor += 500;
console.log(valor);

// Atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = true;
var darCredito;

darCredito = (possuiCarro && possuiCasa); // retorna true ou false
darCredito = (possuiCarro && possuiCasa) ? "Dar crédito ao cliente" : "Negar crédito ao cliente."
console.log(darCredito);


