var prompt = require('prompt-sync')();

let edad = Number(prompt('Introduzca su edad -> '));
console.log(typeof(edad));
console.log(edad);

if (edad >= 18) {
    //let define la variable como ámbito bloque. Es decir, carnet solo va a vivir en memoria mientras se ejecuta el if.
    let carnet = prompt('Tienes carnet? (S/N)');

    //Compara el valor y el tipo de variable, por lo que las dos cosas deben ser iguales para que se cumpla esta condicion.
    if (carnet === 'S') {
        console.log('Puedes conducir');
    } else {
        //En otro caso
        console.log('No puedes conducir');
    }
} else {
    console.log('No puedes conducir');
}