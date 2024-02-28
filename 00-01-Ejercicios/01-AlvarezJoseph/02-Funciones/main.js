console.log("Introducción a JavaScript");

/**
 * 1. Crea una función que tome un array de números como parámetro y devuelva el número más grande del array
 */

console.log("Ejercicio 1");

function findLargestNum(array) {
  let largestNum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > largestNum) {
      largestNum = array[i];
    }
  }
  return largestNum;
}

console.log(findLargestNum([11, 31, 333, 55, 17]));
