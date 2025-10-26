/*
Una tienda ofrece un descuento del 15% sobre el total de la compra durante el mes de octubre.
Dando un mes y un importe, calcular cuál es la cantidad que se debe cobrar al cliente.
*/

let prompt = require('prompt-sync')();

// Declaracion de variables.
let mes = prompt('Introduzca un més (número): ');
mes = Number(mes);

let importe = prompt('Introduce un importe: ');
importe = Number(importe);

let descuento = (15 / 100);

if (mes === 10) {
    let operacion = importe - (importe * descuento);
    console.log(operacion);
} else {
    console.log(importe);
}