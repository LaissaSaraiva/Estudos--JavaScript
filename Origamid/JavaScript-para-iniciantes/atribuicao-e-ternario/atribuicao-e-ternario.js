// Operadores de Atribuição - podem funcionar como formas abreviadas

var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0) (modulo)
x **= y; // x = x ** y (9765625)


var numero = 20;

numero += 10; //ou numero = numero + 10 
console.log(numero); //30


console.log(numero);

/* Operador ternários - 

Abreviação de condicionais com if e else

3 coisas acontecendo ao mesmo tempo

*/

var idade = 20;
var podeBeber;
var naoPossuiDiabetes = true;

podeBeber = (idade >= 18 && naoPossuiDiabetes) ? true : false

console.log(podeBeber);

/*Geralmente utilizado quando precisamos atribuir um valor para uma variável, dependendo de uma condição

Primeira - condição se for verdadeiro, retorna o primeiro valor.

quando usa? Quando queremos atribuit um valor dependendo de algo ( se algo for verdadeiro ou falso)


 Não faz sentido retornar valores booleanos em um operador ternairo, pq a a p´ropria condição já retorna true ou false; Faz sentido retorr strings/ numeros etc
*/

/* IF Abreviado- Não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código */

possuiFaculdade = true;
if(possuiFaculdade)
  console.log("sim");
else
  console.log("nao");