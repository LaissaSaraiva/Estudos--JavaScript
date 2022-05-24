// var tabuada = 7;

// for (var indice = 0; indice <= 10; indice++) {
//   console.log(
//     "O valor de " + tabuada + "x" + indice + " = " + tabuada * indice
//   );
// }

// var numeroSorteado = 10;

// for(var i = 0; i < 100; i++) {
//   if(i === numeroSorteado) {
//     console.log("O seu número foi encontrado");
//   }
// }


//  Quando usar o for ( quando você sabe o começo e o fim);
//  quando  usar o while ( quando não souber o fim)
var achou = false;
var numeroSorteado = 5;
var possivelValor = 0;

while (!achou) {
  possivelValor += 1;

  if (possivelValor === numeroSorteado) {
    console.log("O numero sorteado foi encontrado.");
    achou = true;
  } else {
    console.log("Não foi possível encontrar.");
  }
}
