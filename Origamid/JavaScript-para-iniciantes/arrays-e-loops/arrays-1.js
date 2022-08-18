const destinosTuristicos = ["Rio de Janeiro", "Ilha Grande", "Paraty"];

console.log(destinosTuristicos[1]);

let i = 0; 
while ( i < destinosTuristicos.length) {
  console.log(destinosTuristicos[i]);
  i++;
}

destinosTuristicos.push("Mangaratiba");
console.log(destinosTuristicos);

destinosTuristicos.unshift("Ubatuba");
console.log(destinosTuristicos);
