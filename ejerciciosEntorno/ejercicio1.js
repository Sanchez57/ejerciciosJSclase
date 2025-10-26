/*
*Lee desde entrada dos variables numericas A y B. Con ellas, se pide realizar un algoritmo
*que intercambie lso valores de ambas variables y muestre cuánto valen al final de las dos variables.
*/

//https://www.npmjs.com/package/prompt-sync?activeTab=readme
let prompt = require('prompt-sync')();

let a = prompt('Introduzca a.');

console.log(typeof a);

let b = prompt('Introduzca b');

console.log(typeof b);

//patron de intercambio
b = a;
a = b;

a = bTemporal;

//Backtip `tb sirve para declarar cadenas, te permite interploracoin de cadenas ${variable}
console.log('a = ${a}, b = ${b}');

//Sin interploracion de cadenas, uso concatenacion de cadena
console.log('a = ' + a + ', b = ' + b);