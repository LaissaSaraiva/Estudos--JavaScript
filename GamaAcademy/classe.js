// JS Orientado a Objetos
class Matematica {
  soma(a, b) {
    return a + b;
  }

  subtracao(a, b) {
    return a - b;
  }

  multiplicacao(a, b) {
    return a * b;
  }

  divisao(a, b) {
    return a / b;
  }
}

var instanciaMatematica = new Matematica();

var resultado = instanciaMatematica.soma(4, 7);

console.log(resultado);
