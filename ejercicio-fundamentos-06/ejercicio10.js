// Ejercicio 10. Lourdes Segura
/*
Escribe un programa que genere un número aleatorio del 1 al 10.
Haz que el programa pregunte al usuario números hasta que acierte el número aleatorio generado.
El programa debe mantener una cuenta de cuántos intentos han hecho falta hasta acertar el número.
Cuando el usuario acierte el número aleatorio, el programa mostrará por pantalla el número de intentos.
*/

const readLine = require("readline-sync");

const randomNumber = Math.floor(Math.random() * 10) + 1;
let intentos = 0;
let numero;
console.log("He pensado un número del 1 al 10. ¡Intenta adivinarlo!");

do {
    const input = readLine.question("Adivina: ");
    numero = parseInt(input);
    intentos++;
    if (numero !== randomNumber) {
        console.log("¡Fallo!")
    } 
} while (numero !== randomNumber);

console.log("¡Correcto! Has necesitado", intentos, "intentos.");