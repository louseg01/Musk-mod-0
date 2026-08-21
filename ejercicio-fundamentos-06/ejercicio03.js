// Ejercicio 03-Lourdes Segura
// Escribe un programa que tome un número como entrada y calcule su factorial.

const readLine = require("readline-sync");
const input = readLine.question("Introduce un número: ")

let factorial = 1
let num = parseInt(input);
while (num > 0) {
    factorial *= num;
    num--;
}

console.log("El factorial de ", input, "es ", factorial);