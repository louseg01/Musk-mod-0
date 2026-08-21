/*
Ejercicio 10 (0.8 Estructuras de datos y algoritmos) - Lourdes Segura

Implementa una función que indique si una secuencia de paréntesis, corchetes y llaves es válida.
Es decir, se abren tantos como se cierran y cada secuencia está siempre contenida.
*/

const rl = require ('readline-sync');

function recibirSecuencia() {
    const input = rl.question("Introduce una secuencia: ");
    return input;
}

function esSecuencia(secuencia) {
    const pila = [];
    for (const caracter of secuencia) {
    if (caracter === "(" || 
        caracter === "[" || 
        caracter === "{") {
            pila.push(caracter)
    } else {
        const ultimo = pila.pop();
        switch (caracter) {
                case ")":
                    if (ultimo !== "(") {
                        return false;
                    }
                    break;

                case "]":
                    if (ultimo !== "[") {
                        return false;
                    }
                    break;

                case "}":
                    if (ultimo !== "{") {
                        return false;
                    }
                    break;

                default:
                        return false;
                    
            }
        }
    }
    return pila.length === 0;
}

let secuencia = recibirSecuencia();

if (esSecuencia(secuencia)) {
    console.log("Secuencia correcta");
} else {
    console.log("Secuencia incorrecta");
}