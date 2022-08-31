const imagem = document.querySelector("img");

// Boa prática deixar a função callback separada.

// function callback() {
//   console.log("clicou");
// }

// Boa prática criar a funcção callback fora do Add.event,listener
// Primeiro paramentro do callback é o evento em si.

function callback(evento) {
  console.log(evento);
  console.log("Clicou");
}

imagem.addEventListener("click", callback); // não chama a função com (), função só será chamada com o evento.

// PROPRIEDADES DO EVENT

const animais = document.querySelector(".animais-lista");

console.log(animais);

function callbackPropriedades(event) {
  const currentTarget = event.currentTarget; //this (elemento html)
  const target = event.target; //onde o clique ocorreu (imagem precisa)
  const type = event.type;
  const path = event.path;
  console.log(currentTarget, target, type, path);
}
animais.addEventListener("click", callbackPropriedades);

// Event.prevent default - previne comportamento padrão do evento no browser

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(evento) {
  evento.preventDefault(); // previne um padrão recarregamento de pgan, por ex;
  console.log("clicou");
}

linkExterno.addEventListener("click", handleLinkExterno);

// this em evento está relacioinado ao elemento HTMl selecionada. A mesma coisas que evento. currentTarget;

// Diferentes Eventos
// https://developer.mozilla.org/en-US/docs/Web/Events

const h1 = document.querySelector("h1");

function handleEvent(evento) {
  console.log(evento.type, evento);
}

h1.addEventListener("click", handleEvent);
h1.addEventListener("mouseenter", handleEvent);
h1.addEventListener("mousemove", handleEvent);

window.addEventListener("scroll", handleEvent);
window.addEventListener("resize", handleEvent);

function handleKeyboard(evento) {
  if (evento.key === "f") {
    document.body.classList.toggle("fullscreen");
  }
  console.log(evento.key);
}
window.addEventListener("keydown", handleKeyboard);

const imgs = document.querySelectorAll("img");

function handleImgs(evento) {
  console.log(evento.target.getAttribute("src"));
}

imgs.forEach(function (img) {
  img.addEventListener("click", handleImgs);
});
