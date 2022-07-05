// window.alert("olá");

const href = window.location.href;
console.log(href);

if (
  href === "http://127.0.0.1:5500/Dom-para-Iniciantes/o-que-e-o-dom/index.html"
) {
  console.log("é IGUAL");
}

const h1Selecionado = document.querySelector("h1");
const h1Classes = h1Selecionado.classList;

function callbackH1() {
  console.log("Clicou em,", h1Selecionado.innerText);
}

h1Selecionado.addEventListener("click", callbackH1);

