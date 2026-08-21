// Ejercicio 04 (0.7 Funciones) - Lourdes Segura
// Implementa una función que reciba por parámetro un array de números y que imprima por pantallala suma
// y la media aritmética de sus elementos.

function convertirNumeros() {
    const readLine =  require ("readline-sync");
    const lista = readLine.question("Introduce una lista de números: ");
    let arrayString = lista.split(" ");
    let arrayNumeros = arrayString.map(Number);
    return arrayNumeros;
}

function calcularMedia(listaDeNumeros) {
    let totalSuma = 0;
    for (let i = 0; i < listaDeNumeros.length; i++) {
        totalSuma += listaDeNumeros[i];
    } console.log("La suma es: " + totalSuma);
    let mediaAritmetica = totalSuma / listaDeNumeros.length;
    console.log("La media aritmética es: " + mediaAritmetica);
}

const listaDeNumeros = convertirNumeros();
calcularMedia(listaDeNumeros);

