// Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna comportamento padrão desses links

const linkInterno = document.querySelectorAll('a[href^="#"]');
console.log(linkInterno);

function ativo(evento) {
  evento.preventDefault();
  linkInterno.forEach(function (link) {
    link.classList.remove("ativo");
  });
  evento.currentTarget.classList.add("ativo");
  // ou this.classList.add("ativo");
}

linkInterno.forEach(function (link) {
  link.addEventListener("click", ativo);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll("body *"); // todos os itens dentro de body

function handleElemento(evento) {
  console.log(evento.currentTarget);
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener("click", handleElemento);
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

function removeElemento(evento) {
evento.currentTarget.remove();
}


// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function handleTeclado(evento) {
  console.log(evento.key);

  if (evento.key === "t") {
    document.documentElement.classList.toggle("zoom");
  }
}

window.addEventListener("keydown", handleTeclado);
