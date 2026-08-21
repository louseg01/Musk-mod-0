/*
Ejercicio 08 (0.8 Estructuras de datos y algoritmos) - Lourdes Segura

Implementa una función que reciba un número y devuelva si dicho número es primo o no.
*/

const rl = require ('readline-sync');

function recibirNumero() {
    const input = rl.question("Introduce un número: ");
    let numero = parseInt(input);
    return numero;
}

function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }

    
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}
    
let numero = recibirNumero();

if (esPrimo(numero)) {
    console.log(`El número ${numero} es primo.`);
} else {
    console.log(`El número ${numero} no es primo.`);
};