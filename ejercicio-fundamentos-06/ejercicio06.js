// Ejercicio 06. Lourdes Segura
// Escribe un programa que pida al usuario un año y que imprima por pantalla si dicho año es bisiesto o no.

const readLine = require("readline-sync");

const input = readLine.question("Introduce un año: ");
let añoBisiesto = parseInt(input);

if ((añoBisiesto % 400 === 0) || (añoBisiesto % 4 === 0 && añoBisiesto % 100 !== 0)) {
    console.log("El año", añoBisiesto, "es bisiesto.")
} else {
    console.log("El año", añoBisiesto, "no es bisiesto.")
}