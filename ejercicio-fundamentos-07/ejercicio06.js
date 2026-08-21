// Ejercicio 06 (0.7 Funciones) - Lourdes Segura
// Implementa una función que reciba un número n por parámetro y devuelva una matriz cuadrada n x n con números
// consecutivos de izquierda a derecha y de arriba a abajo.

function recibirMatrizCuadrada() {
    const readLine = require ("readline-sync");
    const input = readLine.question("Introduce un número: ");
    let matrizCuadrada = parseInt(input);
    return matrizCuadrada;
}

function crearMatrizCuadrada(tamañoMatriz) {
    let matriz = [];
    let contador = 1;

    for (let i = 0; i < tamañoMatriz; i++) {
        let fila = [];
        for (let j = 0; j < tamañoMatriz; j++) {
            fila.push(contador++);
        } 
        matriz.push(fila);
    } 
    console.log(matriz);
    return matriz;
} 

const tamañoMatriz = recibirMatrizCuadrada();
crearMatrizCuadrada(tamañoMatriz);
