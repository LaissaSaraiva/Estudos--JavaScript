// SOMA - sUBTRACAO, mULTIPLICACO, DIVISAO, RESTO, PORCENTAGEM
function calculo(operacao, num1, num2) {
  var resultado;
  if (operacao === "SOMA") {
    resultado = num1 + num2;
  } else if (operacao === "SUBTRACAO") {
    resultado = num1 - num2;
  } else if (operacao === "MULTIPLICACAO") {
    resultado = num1 * num2;
  } else if (operacao === "DIVISAO") {
    resultado = num1 / num2;
  } else if (operacao === "RESTO") {
    resultado = num1 % num2;
  } else if (operacao ==="PORCENTAGEM") {
    resultado = ( num1 * num2 ) / 100;
  } else {
    console.log("Operação Inválida");
  }
  return resultado;
}

console.log(calculo("SOMA", 1 , 1));

console.log(calculo("SUBTRACAO", 51 ,5 ));

console.log(calculo("MULTIPLICACAO", 5 ,5 ));

console.log(calculo("DIVISAO", 30 ,5 ));

console.log(calculo("RESTO", 17 ,5 ));

console.log(calculo("PORCENTAGEM", 500 , 5 ));

console.log(calculo("FHY", 2 , 6 ));