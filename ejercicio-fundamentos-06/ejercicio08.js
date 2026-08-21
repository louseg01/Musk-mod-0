// Ejercicio 08. Lourdes Segura
// Escribe un programa que reciba dos números por consola que serán la base y la altura de un rectángulo de asteriscos que se deberá pintar por pantalla.

const readLine = require("readline-sync");

const input = readLine.question("Introduce la altura del rectángulo: ");
const input2 = readLine.question("Introduce la anchura del rectángulo: ");
let altura = parseInt(input);
let anchura = parseInt(input2);


for (let fila = 0; fila < altura; fila++) {
    let linea = "";
    for (let columna = 0; columna < anchura; columna++) {
        if (fila === 0 || fila === altura -1 || columna === 0 || columna === anchura - 1) {
        linea = linea + "*";
    } else {
        linea = linea + " ";
        }
    } console.log(linea)
}