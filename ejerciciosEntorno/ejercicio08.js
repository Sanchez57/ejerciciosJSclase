/*
Realizar un algoritmo que dado un número netero, visualice en pantalla si es par o impar. En el caso
de ser 0, debe visualizar "el número no es par ni impar".
*/

let prompt = require('prompt-sync')();

let number = prompt('Introduce un número: ');

if (number == 0) {
    console.log('El número no es ni par ni impar.');
    return;
}

if (number % 2 == 0) {
        console.log('El número es par');
    } else {
        console.log('El número es impar');
    }