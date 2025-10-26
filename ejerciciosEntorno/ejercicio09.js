/*
Realizar un algoritmo que nos diga si una persona puede acceder a cursar un ciclo formativo de 
grado superior o no. Para acceder a un grado superior, si se tiene un título de bachiller, en caso
de no tenerlo, se puede acceder si hemos superado una prueba de acceso.
*/

let prompt = require('prompt-sync')();

let titulo_bachillerato, prueba_aprobada;

bachillerato = prompt('¿Has titulado en bachillerato?: ');
if (bachillerato == "si") {
    console.log('Puedes matricularte para Grado Superior.');
    return;
}
prueba = prompt('¿Has aprobado la prueba de acceso?: ');

if (prueba == "si") {
    console.log('Puedes matricularte para Grado Superior.');
    return;
} else {
    console.log('No puedes matricularte para Grado Superior');
}