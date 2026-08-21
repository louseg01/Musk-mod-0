// Ejercicio 04. Lourdes Segura
// Escribe un programa que tome un número como entrada e imprima la tabla de multiplicar de ese número del 1 al 10.

const readLine = require("readline-sync");
const input = readLine.question("Introduce un número: ");

let num = parseInt(input);
for(let factor = 1; factor <= 10; factor++) {
    console.log(num, "x ", factor, "= ", num * factor);
}

