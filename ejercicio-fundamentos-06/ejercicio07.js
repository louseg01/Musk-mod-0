// Ejercicio 07. Lourdes Segura
// Escribe un programa que reciba un número del usuario y pinte un triángulo de asteriscos cuya altura sea el número recibido.

const readLine = require("readline-sync");

const input = readLine.question("Introduce una altura: ");
let altura = parseInt(input);


for (fila = 0; fila < altura; fila++) {
    let asteriscos = "";
    let espacios = "";
    let cantidadDeEspacios =  altura - fila - 1;
    let cantidadDeAsteriscos = fila * 2 + 1;
    for (let i = 0; i < cantidadDeEspacios; i++) {
        espacios = espacios + " ";
    }
    for (let j = 0; j < cantidadDeAsteriscos; j++) {
        asteriscos = asteriscos + "*"
    }
    console.log(espacios + asteriscos);
}
