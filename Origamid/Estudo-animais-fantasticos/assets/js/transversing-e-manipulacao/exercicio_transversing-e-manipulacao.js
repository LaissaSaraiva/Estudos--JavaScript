// Duplique o menu e adicione ele em copy

const menu = document.querySelector('.menu');
console.log(menu);
const cloneMenu = menu.cloneNode(true);
const copy = document.querySelector('.copyright')

copy.appendChild(cloneMenu);


// Selecione o primeiro DT da dl de Faq

// Selecione o DD referente ao primeiro DT

// Substitua o conteúdo html de .faq pelo de .animais

const faq = document.querySelector('.faq');
const animais = document.querySelector(".animais");
