// Se pide realizar un algoritmo que lea dos números e indique el mayor, o si son iguales.

//https://www.npmks.com/package/prompt-sync?activateTab=readme

//Forma nativa de importar módulos en node.
let prompt = require('prompt-sync')();

let formato0k = true;

//Peticion A
let a = prompt('Introduzca a: ');

a = Number(a);

if (Number.isNaN(a)) {
    console.log('Formato incorrecto!');
    flagFormatoOk = false;
}

//Peticion B
let b = prompt('Introduzca b: ');

b = Number(b);

if (Number.isNaN(b)) {
    console.log('Formato incorrecto!');
    flagFormatoOk = false;
}

if (formato0k) {
    if (a > b) {
        //con backtip `` se realiza la interporacion de cadena, frente a concatenacion
        console.log(`El máximo es ${a}`);
    }
} else if (a === b) {
    console.log('Son iguales');
} else {
    console.log(`${b} es mayor que ${a}`);
}


