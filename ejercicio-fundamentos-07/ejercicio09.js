// Ejercicio 09 (0.7 Funciones) - Lourdes Segura
// Implementa una función que reciba un número y devuelva una matriz cuadrada en la cual cada elemento 
// es el producto de sus índices

function recibirMatrizCuadrada() {
    const readLine = require ("readline-sync");
    const input = readLine.question("Introduce un número: ");
    let matrizCuadrada = parseInt(input);
    return matrizCuadrada;
}

function crearMatrizMultiplicada(tamañoMatriz) {
    let matriz = [];

    for (let i = 0; i < tamañoMatriz; i++) {
        let fila = [];
        for (let j = 0; j < tamañoMatriz; j++) {
            fila.push(i * j);
        } 
        matriz.push(fila);
    } 
    console.log(matriz);
    return matriz;
} 

const tamañoMatriz = recibirMatrizCuadrada();
crearMatrizMultiplicada(tamañoMatriz);
