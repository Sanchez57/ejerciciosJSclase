var prompt = require('prompt-sync')();
number = Number(prompt('Indica un número para decirte si es par o impar -> '));

if (number % 2 == 0) {
    console.log(number + ' es un número par');
} else {
    console.log(number + ' es un número impar');
}