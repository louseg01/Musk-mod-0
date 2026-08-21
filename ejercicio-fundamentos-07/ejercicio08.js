// Ejercicio 08 (0.7 Funciones) - Lourdes Segura
// Implementa una función que reciba un string y devuelva si es o no un palíndromo (independientemente de los espacios)

function recibirString() {
    const readLine = require ("readline-sync");
    const input = readLine.question("Introduce un texto: ");
    let arrayTexto = input.split(" ");
    let textoSinEspacios = arrayTexto.join("");
    let textoLimpio = textoSinEspacios
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]/g, "")
    return textoLimpio;
}

function comprobarPalindromo(textoParaComprobar) {
    let esPalindromo = true;
    for (let i = 0; i < textoParaComprobar.length / 2; i++) {
        if (textoParaComprobar[i] !== textoParaComprobar[textoParaComprobar.length - 1 - i]) {
            esPalindromo = false;
        }
    } if (esPalindromo === true) {
        console.log("Sí, es palíndromo");
    } else {
        console.log("No es palíndromo.")
    }
    return esPalindromo;
}

let textoParaComprobar = recibirString();
comprobarPalindromo(textoParaComprobar);