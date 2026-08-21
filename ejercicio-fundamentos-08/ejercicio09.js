/*
Ejercicio 09 (0.8 Estructuras de datos y algoritmos) - Lourdes Segura

Implementa una función que, dado un texto con paréntesis, indique si dichos paréntesis están balanceados (se cierran todos los que se abren).
*/

const rl = require ('readline-sync');

function recibirParentesis() {
    const input = rl.question("Introduce una serie de paréntesis: ");
    return input;
}

function balanceados(texto) {
    let contador = 0;
    for (const caracter of texto) {
        if (caracter === "(") {
            contador++
        } else {
            contador--;
        }

        if (contador < 0) {
                return false;
            }
        }
        
        return contador === 0;
    }

let texto = recibirParentesis();

if (balanceados(texto)) {
    console.log("Están balanceados")
} else {
    console.log("No están balanceados")
}