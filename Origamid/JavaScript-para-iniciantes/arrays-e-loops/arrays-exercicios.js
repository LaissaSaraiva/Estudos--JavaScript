// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var brasilCampeaoMundial = [1959, 1962, 1970, 1994, 2002];

for (var i = 0; i < brasilCampeaoMundial.length; i++) {
  console.log(`O Brasil ganhou a Copa do mundo em ${brasilCampeaoMundial[i]}`);
}
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

for (var index = 0; index < frutas.length; index++) {
  console.log(frutas[index]);
  if (frutas[index] === "Pera") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[4]; // fazendo na mão
console.log(ultimaFruta);
// ou

var ultimaFruta1 = frutas[frutas.length - 1]; // quando não sei o tamanho do arry faço array.lenght - 1, pois o índice inicial é 0
console.log(ultimaFruta1);
