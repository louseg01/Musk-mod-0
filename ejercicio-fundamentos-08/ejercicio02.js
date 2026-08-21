// Ejercicio 02 (0.8 Estructuras de datos y algoritmos) - Lourdes Segura
// Implementa una función que reciba dos arrays de números y devuelva un array con los elementos
// que están en el primer array pero que no están en el segundo. Pruébala con valores aleatorios.

function generarArray() {
    let longitudArray = Math.ceil(Math.random() * 5)
    let numeros = [];

    for (let i = 0; i < longitudArray; i++) {
    numeros.push(Math.ceil(Math.random() * 10));
    }
    return numeros;
}

function comprobarArray(array1, array2) {
    return array1.filter((elemento) => {
        return !array2.includes(elemento);
    })
}

let array1 = generarArray();
let array2 = generarArray();
 
console.log(
    "\n Array 1: " + array1,
    "\n Array 2: " + array2,
    "\n Diferencias: " + ([...new Set(comprobarArray(array1, array2))])
);