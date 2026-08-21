// Ejercicio 02-Lourdes Segura
// Escribe un programa que pida al usuario tres números y que pinte por pantalla si al menos uno de ellos es par.

// OPCIÓN 1: Uso de bucle + operador lógico OR (||)

// const readLine = require("readline-sync");
// const input = readLine.question
// const misNumeros = [] // array para almacenar los números introducidos por el usuario

// const num = parseInt(input);
// for (let vuelta = 0; vuelta < 3; vuelta++) {
//     const input = readLine.question("Introduce un número: ");
//     misNumeros[vuelta] = input; // almacenamiento de números en array
// }

// // Operación números pares/impares con operador lógico OR (||)
// if (misNumeros[0] % 2 === 0 || misNumeros[1] % 2 === 0 || misNumeros[2] % 2 === 0) {
//     console.log("Hay almenos un número par");
// } else {
//     console.log("No hay números pares");
// }

/*
OPCIÓN 2. Con variable bandera.
Para evitar escribir la operación (numero % 2 === 0) tres veces, y por lo tanto
poder aumentar la cantidad de números a introducir si se quisiera
*/

const readLine = require("readline-sync");
const input = readLine.question
const misNumeros = [] // array para almacenar los números introducidos por el usuario

const num = parseInt(input);
for (let vuelta = 0; vuelta < 3; vuelta++) {
    const input = readLine.question("Introduce un número: ");
    misNumeros[vuelta] = input; // almacenamiento de números en array
}

//Operación números pares/impares con operador lógico OR (||)

let hayPar = false;

for(index = 0; index < misNumeros.length; index++) {
    (hayPar = hayPar || misNumeros[index] % 2 === 0) 
}

if (hayPar) {
    console.log("Hay al menos un número par")
} else {
    console.log("No hay números pares")
}