// Ejercicio 01 (0.8 Estructuras de datos y algoritmos) - Lourdes Segura
// Implementa una función que reciba un texto y devuelva las palabras que se repiten en dicho texto.

function insertarFrase() {
    const rl = require ('readline-sync');
    const input = rl.question("Introduce tu frase: ");
    let textoLimpio = input
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[¿?¡!.]/g, "") 

    arrayPalabras = textoLimpio.split(" ");
    return arrayPalabras;
}

function comprobarPalabras(frase) {
    let contador = {};
    let palabrasRepetidas = []
    for (i = 0; i < frase.length; i++) {
        let palabra = frase[i]
        if (contador[palabra]) {
            contador[palabra]++;
        } else {
            contador[palabra] = 1
        }
        if (contador[palabra] === 2) {
            palabrasRepetidas.push(palabra);
        }
    }
    return palabrasRepetidas;
}

let frase = insertarFrase();
let repetidas = comprobarPalabras(frase);

if (repetidas.length > 0) {
    repetidasJoin = repetidas.join(", ")
    console.log("Las palabras repetidas son: ", repetidasJoin);
} else {
    console.log("No hay palabras repetidas.");
}