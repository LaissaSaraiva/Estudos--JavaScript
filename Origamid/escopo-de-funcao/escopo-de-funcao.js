
// Escopo de Função = Variáveis declaradas dentro da função não são acessadas fora dele

function mostrarCarro () {
  var carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // fusca
console.log(carro); // ReferenceError: carro is not defined

// Escopo de Bloca - var vaza o bloco.
{
  var mes = 'Dezembro';
  console.log(mes)
}
console.log(mes);

// Var vaz o bloco, mesmo se a condição for falsa, por causa do Hoisting


if(false) {
  var transporte = 'avião';
  console.log(transporte);
}
console.log(transporte); //undefined

// {} CRIA UM BLOCO
// Chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}
// const e let não vazam o bloco
{
  var carro = 'Fusca';
  const ano = 2018;
}
console.log(carro); // Carro
console.log(ano); // erro ano is not defined

// For Loop Ao utilizar var dentro de um forloop, que é um bloco, o valor do variável utilizada irá vazar e existir fora do loop.

for(var i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // 10

// for loop sempre escrito com let

// FOR LOOP COM LET
// Com o let evitamos que o número vaze.

for(let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // i is not defined


// CONST - Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.

// valores que não mudam, utilizares o const

const semana = 'sexta';

console.log(semana);


const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}

data.dia = 29; // Funciona
// data = 'Janeiro'; // erro



// utilizar o const.

// LET
// Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.

let ano1;
ano1 = 2018;
ano1++;
console.log(ano1); // 2019

// let ano1 = 2020; // erro, redeclarou a variável