//Ejercicio 03 (0.7 Funciones) - Lourdes Segura
// Implementa una función que reciba por parámetro el radio de un círculo y que pinte por pantalla la
// circunferencia y el área del círculo.

const readLine = require("readline-sync");
const input = readLine.question("Introduce el radio: ");
let radio = parseInt(input);

function calcularAreaCircunferencia(radio) {
    let circunferencia = 2 * Math.PI * radio;
    let area = Math.PI * (radio ** 2);
    console.log("La circunferencia es " + circunferencia);
    console.log("El área del círculo es " + area);

}

calcularAreaCircunferencia(radio);