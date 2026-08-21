//Ejercicio 02 (0.7 Funciones) - Lourdes Segura
// Implementa una función que reciba por parámetro el radio de un círculo y que devuelva su área.

const readLine = require("readline-sync");
const input = readLine.question("Introduce el radio: ");
let radio = parseInt(input);

function calcularArea(radio) {
    let area = Math.PI * (radio ** 2);
    console.log("El área del círculo es " + area);
    return area;

}

calcularArea(radio);

