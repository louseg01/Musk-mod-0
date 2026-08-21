// Ejercicio 05. Lourdes Segura
// Escribe un programa que tome una cadena como entrada y cuente el número de vocales (a, e, i, o, u) en la cadena.

const readLine = require("readline-sync");

let contador = 0;
let frase = readLine.question("Introduce una frase: ");
frase = frase.toLowerCase();

for(let i = 0; i < frase.length; i++) {
    if (frase[i] === "a" || frase [i] === "e" || frase [i] === "i" || frase [i] === "o" || frase [i] === "u") {
        contador++;
    }
}

console.log("El número de vocales es:", contador);

