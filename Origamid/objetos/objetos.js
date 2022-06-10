// Objetos
// Conjunto de variáveis e funções / propriedades e métodos

var pessoa = {
  nome: "Laíssa",
  idade: 31,
};

console.log(typeof pessoa);
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);

// Métodos = é uma propriedade que possui uma função no local do seu valor
//this é o proprio objeto

var quadrado = {
  lados: 4, // para acessar essa info dentro dos métodos usamos this.lados
  area: function (lado) {
    // método
    return lado * lado;
  }, // ou abreviado
  perimetro(lado) {
    return this.lados * lado;
  },
};

console.log(quadrado);
console.log(quadrado.area(5)); // 25
console.log(quadrado.perimetro(5)); // 20

/*ABREVIAÇÃO DOS MÉTODOS
Abreviação de area: function() {} para area() {}, no ES6+

de 
area: function (lado) { 
  return lado * lado;
},
 --------x------------
para

area(lado) {
  return lado * lado;
},

*/

// Objetivo é a ORGANIZAÇÕ DO CÓDIGO em pequenas partes reutilizáveis

Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14

// Math é um objeto nativo de JavaScript. Já percebeu que console é um objeto e log() um método?

console.table(quadrado);

// Criar um objeto
// é criado utilizando chaves {}

var carro = {};
var people = {};

console.log(typeof carro); //object

//DOT NOTATION GET -Acesse as propriedade utilizando .
//DOT NOTATION SET - Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.
// ADICIONAR PROPRIEDADES E MÉTODOS - Basta adicionar um novo nome e definir o valor.
// PALAVRA-CHAVE THIS - this irá fazer uma referência ao próprio objeto.

var menu = {
  width: 800,
  height: 50,
  backGroungColor: "#84e",
  metadeHeight() {
    return this.height / 2; // ou return menu.heigth / 2
  },
};

var bgc = menu.backGroungColor;
console.log(bgc);

menu.backGroungColor = "#000"; // reatibuindo valor a uma propriedade
console.log(menu.backGroungColor);

menu.color = "#602"; // adicionando uma propriedade ao objeto
console.log(menu);

// PROTÓTIPO E HERANÇA
// O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.

var menu1 = {
  width: 800,
};

menu1.hasOwnProperty("width"); // true
menu1.hasOwnProperty("height"); // false
