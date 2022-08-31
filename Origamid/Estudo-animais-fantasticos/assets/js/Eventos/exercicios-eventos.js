// Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna comportamento padrão desses links

const linkInterno = document.querySelectorAll('a[href^="#"]');

console.log(linkInterno);

function ativo(evento) {
  evento.preventDefault();
  evento.target.classList.toggle("ativo");
}

linkInterno.forEach(function (link) {
  link.addEventListener("click", ativo );
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados



// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
