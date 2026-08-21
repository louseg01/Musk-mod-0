// Ejercicio 03 (0.8 Estructuras de datos y algoritmos) - Lourdes Segura
// Implementa una función que reciba una cadena y devuelva un Map con la frecuencia de cada caracter en la cadena. (Las veces que se repite)
function recibirTexto() {
    const rl = require ('readline-sync');
    const input = rl.question("Introduce un texto: ");
    let textoRecibido = input.split("");
    
    return textoRecibido;
}

function generarMapa(texto) {
    let mapa = new Map();
    for (const caracter of texto)
        if (mapa.has(caracter)) {
        let contador = mapa.get(caracter);
        contador++
        mapa.set(caracter, contador)
    } else {
        mapa.set(caracter, 1)
    }
    return mapa;
}

let texto = recibirTexto()
console.log(generarMapa(texto))
