// Ejercicio 05 (0.8 Estructuras de datos y algoritmos) - Lourdes Segura
// Implementa una función que invierta el orden de una palabra usando una pila (stack).
const rl = require ('readline-sync');
function recibirPalabra() {
    const palabra = rl.question("Introduce una palabra: ")
    return palabra
}

function invertirPalabra(palabra) {
    let pila = palabra.split("")
    let palabraInvertida = []
    
    for (const letra of palabra) {
        palabraInvertida.push(pila.pop())
    }
    return palabraInvertida.join("")
}

let palabra = recibirPalabra()
let palabraInvertida = invertirPalabra(palabra)
console.log("La palabra invertida es:", palabraInvertida);