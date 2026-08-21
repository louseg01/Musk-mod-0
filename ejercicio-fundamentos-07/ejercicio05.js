// Ejercicio 05 (0.7 Funciones) - Lourdes Segura
// Implementa una función que reciba por parámetro un array de elementos e imprima por pantalla si
// todos los elementos son únicos en la lista u otra lista con los elementos repetidos en caso contrario.

function introducirElementos() {
    const readLine = require ("readline-sync");
    const lista = readLine.question("Introduce una lista de elementos: ");
    let arrayLista = lista.split(" ");
    return arrayLista;
}

function comprobarLista(listaDeElementos) {
    let copiaElementosIguales = [];
    let elementosIguales = false;

    for (let i = 0; i < listaDeElementos.length; i++) {
        for (let j = i + 1; j < listaDeElementos.length; j++) {
            if (listaDeElementos[i] === listaDeElementos[j]) {
                elementosIguales = true;
                if (!copiaElementosIguales.includes(listaDeElementos[i])){
                    copiaElementosIguales.push(listaDeElementos[i]);
                }
            }
        }
    }     
    if (elementosIguales === false) {
    console.log("No hay elementos iguales");
    } else {
        let stringElementos = copiaElementosIguales.join(", ");
        console.log("Los elementos iguales son: ", stringElementos);
        }
}

const listaDeElementos = introducirElementos();
comprobarLista(listaDeElementos);


