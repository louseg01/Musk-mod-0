// Ejercicio 09. Lourdes Segura
/*
Escribe un programa que solicite un número al usuario (del 0 al 10) y devuelva el número escrito en letras.
Si el valor introducido no está dentro del rango 0-10 o no es un número se deberá volver a solicitar un número.
*/

const readLine = require("readline-sync");

let escribir;
let numero;

do {
    escribir = readLine.question("Escribe un número del 1 al 10: ");
    numero = parseInt(escribir);
} while (isNaN(numero) || numero < 1 || numero > 10);

switch (numero) {
    case 1:
        console.log("Uno");
        break;
    case 2:
        console.log("Dos");
        break;
    case 3:
        console.log("Tres");
        break;
    case 4:
        console.log("Cuatro");
        break;
    case 5:
        console.log("Cinco");
        break;
    case 6:
        console.log("Seis");
        break;
    case 7:
        console.log("Siete");
        break;
    case 8:
        console.log("Ocho");
        break;
    case 9:
        console.log("Nueve");
        break;
    case 10:
        console.log("Diez");
        break;
}