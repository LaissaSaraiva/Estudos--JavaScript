const menu = document.querySelector(".menu");

// classList é um ArrayLike.

// --> Adicionando uma classe
menu.classList.add("ativo");
console.log(menu.classList);
// Saída : DOMTokenList(3) ['menu', 'azul', 'ativo', value: 'menu azul ativo']

// --> Removendo uma classe
menu.classList.remove("azul");
console.log(menu.classList);
//Saída : DOMTokenList(2) ['menu', 'ativo', value: 'menu ativo']

//  --> Alterando (Adicionando/removendo uma classe)
menu.classList.toggle("azul");
console.log(menu.classList);

// --> Avalia se existe uma classe na lista
if (menu.classList.contains("azul")) {
  menu.classList.add("possui-azul");
} else {
  menu.classList.add("nao-possui-azul");
}
console.log(menu.classList);
// DOMTokenList(4) ['menu', 'ativo', 'azul', 'possui-azul', value: 'menu ativo azul possui-azul']

//  --> ATTRIBUTES
// rETORNA ARRAY-LIKE COM ATRIBUTOS DO ELEMENTO

const animais = document.querySelector(".animais");
console.log(animais.attributes[1]);

//  -- > GETATTRIBUTE E SETATTRIBUTE
// Métodos (FUNÇÕES) que retornam ou definem de acordo com o atributo selecionado

// Pegando primeira imagem
const img = document.querySelector("img");
console.log(img.getAttribute("src"));

//  -- > SetAtributte  nomeando oatributo alt
console.log(img.setAttribute("alt", "é uma raposa"));

//  --> HasAtributte

const possuiAlt = img.hasAttribute("alt");
console.log(possuiAlt); // retorna true ou false

//  -->RemoveAttribute

img.removeAttribute("alt");
console.log(img.attributes);
console.log(possuiAlt);

// Pegando todas as imagens e fazendo foreach
const imgs = document.querySelectorAll("img");
console.log(imgs);

imgs.forEach(function (item) {
  console.log(item.src);
});

// READ ONLY VS WRITABLE
// Existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura.

const animais1 = document.querySelector(".animais");

animais1.className; // string com o nome das classes
animais1.className = "azul"; // substitui completamente a string
animais1.className += " vermelho"; // adiciona vermelho à string

animais1.attributes = 'class="ativo"'; // não funciona, read-only
