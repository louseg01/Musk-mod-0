// array duplicado * 2 con método .map
const fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
const duplicar = fibonacci.map(fibonacci => fibonacci * 2);

console.log(duplicar);