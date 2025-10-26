/*

Algoritmo que lea un número por teclado. En caso de que ese número
sea 0 o menor que 0, se deberá calcular su cuadrado y la raíz cuadrada
del mismo, visualizando el número que ha tecleado el usuario
y su resultado.

Para calcular la raíz cuadrada se puede usar la función interna 
RAIZ(X) o con una potencia de 0,5.

*/

//Forma nativa de importar módulos en node.
let prompt = require('prompt-sync')();

let a = prompt('Introduce un número cualquiera: ');
a = Number(a);

if (a > 0) {
    let resultado = Math.sqrt(a);
    console.log(operacion);
} else {
    console.error('El número introducido es inválido. Introduce un número mayor que "0".');
    
}