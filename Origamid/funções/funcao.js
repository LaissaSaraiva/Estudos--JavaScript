// Exemmplo 1
function areaQuadrado(lado) {
  return lado * lado ;
}
console.log(areaQuadrado (2));

// Exemplo 2

function soma (a,b) {
  return a + b;
}
console.log( soma(2,5));

//  Exemplo 3
function ativaFuncao(){
  console.log("Função ativa!");  
}
ativaFuncao();

// Exemplo 04

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(total);

// PARÂMETROS E ARGUMENTOS
// Ao criar uma função, você pode definir parâmetros.
// Ao executar uma função, você pode passar argumentos.

// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  return imc;
}

imc(80, 1.80) // 80 e 1.80 são os argumentos
imc(60, 1.70) // 60 e 1.70 são os argumentos


function corFavorita(cor){
  if (cor === 'azul') {
    return 'Eu gosto do céu';
  } else if (cor === 'verde') {
    return 'eu gosto das Florestas!';
  } else {
    return 'Você não gosta de nenhuma cor.';
  }
} 

console.log(corFavorita());

// argumnetos string + função
addEventListener('click' , function() {
  console.log('oi');
} );

// 

function imc2(peso, altura) {
  const imc2 = peso / (altura ** 2);
  console.log(imc2);
}

imc2(80, 1.80); // retorna o imc no console
console.log(imc2(80, 1.80)); // retorna o imc e undefined

// VALORES RETORNADOS
// Uma função pode retornar qualquer tipo de dado e até outras funções./// cuidado: o ideal é retornar só um tipo de valor.

function terceiraIdade(idade) {
  console.log(typeof idade);
  if (typeof idade !== 'number') {
    return 'Por favor, preencha um número';

  } else if (idade >= 60) {
    console.log('é idoso');
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade("oi"));



// função

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193; 
  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}

console.log(faltaVisitar(21));

//  Escopo Lexico

var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
outrosDados(); // retorna um erro

//  Hoisting
