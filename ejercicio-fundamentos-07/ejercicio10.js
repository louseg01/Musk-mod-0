// Ejercicio 10 (0.7 Funciones) - Lourdes Segura
// Implementa una función que reciba una matriz como parámetro y devuelva la matriz traspuesta

function generarMatriz(numeroFilas, numeroColumnas) {
    let matrizOriginal = [];
    let contador = 0;

    for (let i = 0; i < numeroFilas; i++) {
        let fila = [];
        for (let j = 0; j < numeroColumnas; j++) {
            fila.push(contador++);
        }
        matrizOriginal.push(fila);
    } 
    return matrizOriginal;
}

function matrizTraspuesta(matrizOriginal) {
    let traspuesta = [];
    let filasMatriz = matrizOriginal.length;
    let columnasMatriz = matrizOriginal[0].length;

    for (let i = 0; i < columnasMatriz; i++) {
        let filaTraspuesta = [];
        for (let j = 0; j < filasMatriz; j++) {
            filaTraspuesta.push(matrizOriginal[j][i]);
        } 
        traspuesta.push(filaTraspuesta);
    } 
    return traspuesta;
}

const matrizOriginal = generarMatriz(4, 5);
matrizTraspuesta(matrizOriginal);

console.log(generarMatriz(4,5));
console.log(matrizTraspuesta(matrizOriginal));