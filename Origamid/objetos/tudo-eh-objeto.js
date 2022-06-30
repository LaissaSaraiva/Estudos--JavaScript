/*TUDO É OBJETO
Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos (fu~çoes). Por isso são objetos.*/

// Uma string herda propriedades e métodos do construtor String()
var nome = "André";
console.log(nome.length);
console.log(nome.toLowerCase());

var nomeMinusculo = nome.toLowerCase();
           
//  NÚMEROS - Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos

var numero = 1.8;

numero.toFixed();
numero.toString();

//Funções também possuem métodos e propriedades

function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

areaQuadrado.length; // 1

//Elementos do DOM -

// Possuem métodos e propriedades que vc vai fazer a maioria das interações
<a class="btn">Clique</a>;

var btn = document.querySelector(".btn");

btn.classList.add("azul"); // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener("click", function () {
  console.log("Clicou");
});

// OBJETOS REVOLUCIONARAM A PROGRAMAÇÃO - Web API's são métodos e propriedades que permitem a interação JavaScript e Browser. Comunicaçõa entre duas máquina= api + api
