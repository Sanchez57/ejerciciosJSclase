/*
Un oclegio desea saber qué porcentaje de niños y qué porcentaje de niñas hay en el curso actual.
Diseña un algoritmo para este propósito.
*/

let prompt = require('prompt-sync')();

let niños = prompt('Introduce el número de niños que hay: ')
niños = Number(niños);
let niñas = prompt('Introduce el número de niños que hay: ')
niñas = Number(niñas);

let porcentaje_niños = (niños / (niños + niñas) * 100);
let porcentaje_niñas = (niñas / (niños + niñas) * 100);

console.log(`El porcentaje de niños es de ${porcentaje_niños}%, y el de niñas es de ${porcentaje_niñas}%.`)