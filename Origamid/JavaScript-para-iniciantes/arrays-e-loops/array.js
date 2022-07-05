// ARRAY
// É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.

//Métodos e Propeirdade de uma Array
console.log(videoGames);
var ultimoItem = videoGames.pop(); // remove o último item
console.log(videoGames);
videoGames.push("Nitendo"); //adiciona
console.log(videoGames);

//for  Loop algo de para ser repetido  no teu código

for (var numero = 0; numero < 10; numero++) {
  console.log(numero);
}

// 0  for loop possui 3 partes, início, condição e incremento

// While loop

var i = 0;

while (i < 100) {
  console.log(i);
  i = i + 5;
}

// loops em arrays

var videoGames = ["Switch", "Ps4", "xbox", "3DS"];

for (var item = 0; item < videoGames.length; item++) {
  console.log(item);
  console.log(videoGames[item]);
}

// Acessando um item
// console.log(videoGames[item]);

// Break - pra parar o Loop

var LinguagensDeProgramacao = ["Python", "Java", "JavaScript", "Flutter"];

for (var i = 0; i < LinguagensDeProgramacao.length; i++) {
  console.log(i);
  console.log(LinguagensDeProgramacao[i]);
  if (LinguagensDeProgramacao[i] === "JavaScript") {
    break;
  }
}

// forEach = é uma método que executa uma função para cada item do array

var disneyPersonagens = ["Mickey", "Minnie", "Pateta", "Pluto"];
console.log(disneyPersonagens);

disneyPersonagens.forEach(function (personagem, index) {
  // argumento dinamico "persanagem"
  console.log(`Mickey e seu amigo ${personagem} ${index}`);
});

// for(var i = 0; i < disneyPersonagens.length; i++) {
//   console.log(disneyPersonagens[i]);
//   if (disneyPersonagens[i] === "Pateta") {
//     break;
//   }
// }
