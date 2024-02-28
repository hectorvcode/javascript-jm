console.log("Introducción a JavaScript");

/**
 * 1. Crea una función que tome un array de números como parámetro y devuelva el número más grande del array
 */

console.log("Ejercicio 1");

function numMayor(arr) {
  let numeroMayor = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > numeroMayor) {
      numeroMayor = arr[i];
    }
  }

  return numeroMayor;
}

console.log(numMayor([1, 5, 2, 18, 12]));
