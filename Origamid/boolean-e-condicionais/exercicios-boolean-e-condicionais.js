// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var idadeLaissa = 31;
var idadeLucas = 26;

if(idadeLaissa > idadeLucas) {
  console.log("Laíssa é a irmã mais velha!");
} else if (idadeLaissa === idadeLucas) {
  console.log("Mesm aidade.");
}else  {
  console.log("Lucas é o irmão mais velho.");
}


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(expressao);


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;

console.log(!!nome, !!idade, !!possuiDoutorado, !!dinheiroNaConta, !!empregoFuturo);

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil <= china) {
  console.log("A população do Brail é menor");
} else {
  console.log("A populaçõa da China é maior.");
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}