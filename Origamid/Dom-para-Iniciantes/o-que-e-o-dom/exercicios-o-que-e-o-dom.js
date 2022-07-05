// Retorne o url da página atual utilizando o objeto window

const urlPagina = window.location.href;
console.log(`O link desta página é ${urlPagina}`);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const ElementoAtivo = document.querySelector(".ativo"); // acessa o primeiro elemento;
console.log(ElementoAtivo);
// Retorne a linguagem do navegador

const idiomaDestPagina = window.navigator.language;
console.log(`O idioma desta página é ${idiomaDestPagina}`);

// Retorne a largura da janela 

const larguraJanela = window.innerWidth;
console.log(larguraJanela);