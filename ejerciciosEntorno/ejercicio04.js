/*
Solicita por teclado 3 numeros, si el primero es negarivo, muestra el producto de los tres
y si no lo es muestra la suma.
*/

//https://www.npmks.com/package/prompt-sync?activateTab=readme

let prompt = require('prompt-sync')();

let a = prompt('Introduzca el primer número: ');
a = Number(a);
let b = prompt('Introduzca el segundo número: ');
b = Number(b);
let c = prompt('Introduzca el tercer número: ');
c = Number(c);

if (a < 0) {
    let operacion = a * b * c;
    console.log(operacion);
} else {
    let operacion = a + b + c;
    console.log(operacion);
}