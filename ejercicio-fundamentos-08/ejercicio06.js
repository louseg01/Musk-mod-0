/*
Ejercicio 06 (0.8 Estructuras de datos y algoritmos) - Lourdes Segura

Implementa el algoritmo de ordenación bubble sort y comprueba cuánto tarda en ejecutarse sobre un
array de números aleatorios de tamaño 100.000.
*/ 

const arrayRandom = []
for (let i = 0; i < 100000; i++) {
    const randomNumber = Math.floor(Math.random() * 100000);
    arrayRandom.push(randomNumber);
}

const inicio = performance.now()

for (let i = 0; i < arrayRandom.length - 1; i++) {
    for (let j = 0; j < arrayRandom.length - 1 - i; j++) {
        if (arrayRandom[j] > arrayRandom[j + 1]) {
            [arrayRandom[j], arrayRandom[j + 1]] = [arrayRandom[j + 1], arrayRandom[j]]
        }
    }
}
const fin = performance.now()
const tiempo = ((fin - inicio) / 1000).toFixed(3);

console.log(
    `El algoritmo Bubble Sort ha tardado ${tiempo} segundos en ordenar ${arrayRandom.length} elementos.`
);