const h1 = document.querySelector("h1");
const animais = document.querySelector(".animais-descricao");
console.log(h1.innerText);

console.log(h1.innerHTML);
console.log(h1.outerHTML);

h1.innerHTML = "<p>Novo Título</p>";
// h1.innerText = "<p>Novo Título</p>";
// h1.outerHTML = "<p>Novo Título</p>"

// Transversing - Navegando pelo DOM, utilizando suas propriedades e métodos

const lista = document.querySelector(".animais-lista");
console.log(lista);

console.log(lista.parentElement); // elemento pai
console.log(lista.parentElement.parentElement); // elemento pai do pai

console.log(lista.previousElementSibling); // elemento acima
console.log(lista.nextElementSibling); // elemento abaixo

console.log(lista.children); // elementos filhos
console.log(lista.children[1]); // acesso como se fosse uma array

// selecionando o último filho
console.log(lista.children[lista.children.length - 1]); 
console.log(lista.children[--lista.children.length]);
console.log(lista.querySelector("li:last-child"));


// Elemento Vs Node

// Elementos represetam um elemento html, ou seja, uma tag.
// Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais. ( qualquer coisa) Ele pega os "enters - quebra de linha / comantérios se tiver."

console.log(lista.childNodes);

console.log(lista.previousSibling) // Pega o Node acima ( pode ser tag, espaço, comentário)


// Manipulando Elementos

const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
console.log(contato, titulo);

// movendo item para o último filho
lista.appendChild(titulo);
animais.appendChild(titulo);

// contato.insertBefore(animais, titulo); //Quero inserir animais dentro de contato antes do título

const mapa = document.querySelector('.mapa');
contato.insertBefore(animais, mapa);

// contato.removeChild(titulo); // remove o título de dentro de contato
// contato.replaceChild(lista, titulo) // substitui o título de contato por Lista

// Novos Elementos
// Criando elementos  com o método createElement()

const novoH1 = document.createElement('h1');
novoH1.innerText = 'Título Criado';
novoH1.classList.add('titulo');
console.log(novoH1);

// adicionando ao html após o mapa
mapa.appendChild(novoH1);

// Clonando Elementos

const cloneH1 = h1.cloneNode(true);// o valor booleano é para trazer todos os elemeto filho juntos. caso não esteja , vai trazer apenas o elemento em si .

const faq = document.querySelector('.faq');

faq.appendChild(cloneH1);