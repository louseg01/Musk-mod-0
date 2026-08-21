// Ejercicio 04 (0.8 Estructuras de datos y algoritmos) - Lourdes Segura
// Escribe una función que reciba dos cadenas y verifique si son anagramas utilizando un Map.

const rl = require ('readline-sync');

function recibirPalabra1(){
        const palabra1 = rl.question("Inserta una palabra: ");
        return palabra1
}

function recibirPalabra2(){
        const palabra2 = rl.question("Inserta otra palabra: ");
        return palabra2
}

function generarMapa(palabra1, palabra2) {
    const anagrama = new Map();

    for (const letra of palabra1) {
        if (anagrama.has(letra)) {
            let contador = anagrama.get(letra);
            contador++;
            anagrama.set(letra, contador)
        } else {
            anagrama.set(letra, 1)
        }
    }

    for (const letra of palabra2) {
        if(anagrama.has(letra)) {
            let contador = anagrama.get(letra);
            contador--;
            anagrama.set(letra, contador)
        } else {
            anagrama.set(letra, -1);
        }
    }
    return anagrama;
}

function esAnagrama(anagrama){
    let esAnagrama = true;
    for (const valor of anagrama.values()) {
        if (valor !== 0) {
            esAnagrama = false
            break;
        } else {
            esAnagrama = true
        }
    }
    return esAnagrama;
}

let palabra1 = recibirPalabra1()
let palabra2 = recibirPalabra2()
let anagrama = generarMapa(palabra1, palabra2)

if (palabra1 === "" || palabra2 === "") {
    console.log("No has escrito ninguna palabra, por favor, reinicia el programa.")
} else if (esAnagrama(anagrama)) {
    console.log("Las palabras son anagramas.")
} else {
    console.log("Las palabras no son anagramas.")
};