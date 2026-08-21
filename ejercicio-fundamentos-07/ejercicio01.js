//Ejercicio 01 (0.7 Funciones) - Lourdes Segura
// Implementa una función que reciba por parámetro el radio de un círculo y que devuelva la longitud de la circunferencia.

const readLine = require("readline-sync");
const input = readLine.question("Introduce el radio: ");
let radio = parseInt(input);

function calcularCircunferencia(radio) {
    let circunferencia = 2 * Math.PI * radio;
    console.log("La circunferencia es " + circunferencia);
    return circunferencia;

}

calcularCircunferencia(radio);

