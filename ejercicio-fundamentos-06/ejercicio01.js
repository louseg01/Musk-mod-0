// Ejercicio 01-Lourdes Segura
// Escribe un programa que pida al usuario un número e imprima por pantalla si el número es par o impar y si es positivo o negativo. Si la entrada no es un número, se deberá pintar “No es un número”.

const readLine = require("readline-sync");

const input = readLine.question("Introduce un número: ");

const num = parseInt(input);

if (isNaN(num)) {
    console.log("No es un número. Reinicia el programa.")
    process.exit();
} else if (num === 0) {
    console.log("El número es 0")
    process.exit();
}
// Condicional número par/impar
if (num % 2 === 0) {
    console.log("El numero es par")
} else {
    console.log("El número es impar");
}
// Condicional número positivo/negativo
if (num < 0) {
    console.log("El número es negativo")
} else {
    console.log("El número es positivo");
}