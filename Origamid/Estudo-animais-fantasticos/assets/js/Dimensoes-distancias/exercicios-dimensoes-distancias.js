// Verifique a distância da primeira imagem
// em relação ao topo da página

const img = document.querySelector("img");

console.log(img);
console.log(img.offsetTop);

// Retorne a soma da largura de todas as imagens

function somaImagens() {
  const imgs = document.querySelectorAll("img");
  console.log(imgs);

  let soma = 0;
  imgs.forEach(function (imagens) {
    soma = soma + imagens.offsetWidth;
  });
  console.log(soma);
}

window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)



const links = document.querySelectorAll('a');
console.log(links);

links.forEach(function(link) {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  
  if(linkWidth >= 48 && linkHeight >= 48){
    console.log("Possui boa acessibilidade");
  } else {
    console.log("Não possui boa acessibilidade");
  }
});


// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches; // retorna true ou false

if (browserSmall) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
}
