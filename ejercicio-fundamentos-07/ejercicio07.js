// Ejercicio 07 (0.7 Funciones) - Lourdes Segura
// Implementa una función que reciba un texto (string) y que devuelva una matriz bidimensional de ancho 5 y 
// de alto indeterminado que incorpore las palabras (elementos separados por espacios) del texto una por una
// de izquierda a derecha y de arriba a abajo.

function recibirFrase() {
    const readLine = require ("readline-sync");
    const input = readLine.question("Introduce una frase: ");
    let arrayFrase = input.split(" ");
    return arrayFrase;
}

function crearMatriz(fraseParaMatriz) {
    let matriz = [];

    for (let i = 0; i < fraseParaMatriz.length; i += 5) {
        let fila = fraseParaMatriz.slice(i, i + 5);
        matriz.push(fila);
    }
    console.log(matriz);
    return matriz;
}

let fraseParaMatriz = recibirFrase();
crearMatriz(fraseParaMatriz);