/*
Ejercicio 07 (0.8 Estructuras de datos y algoritmos) - Lourdes Segura

Implementa el algoritmo de ordenación quicksort y comprueba cuánto tarda en ejecutarse sobre un array de números
aleatorios de tamaño 100.000.
*/ 

const arrayRandom = []
for (let i = 0; i < 100000; i++) {
        const randomNumber = Math.floor(Math.random() * 100000);
        arrayRandom.push(randomNumber);
    }


function partition(array, inicio, fin) {
    const pivote = array[fin];
    let i = inicio;
    for (let j = inicio; j < fin; j++) {
        if (array[j] < pivote) {
            [array[i], array[j]] = [array[j], array[i]];
            i++;
        }
    }
    [array[i], array[fin]] = [array[fin], array[i]];
    return i;
}

function quickSort(array, inicio, fin) {
    if (inicio < fin) {
        let posicionPivote = partition(array, inicio, fin);
        quickSort(array, inicio, posicionPivote - 1);
        quickSort(array, posicionPivote + 1, fin);
    }
}

const inicio = performance.now()

quickSort(arrayRandom, 0, arrayRandom.length -1);

const fin = performance.now()
const tiempo = ((fin - inicio) / 1000).toFixed(3);

console.log(
    `El algoritmo Quicksort ha tardado ${tiempo} segundos en ordenar ${arrayRandom.length} elementos.`
);