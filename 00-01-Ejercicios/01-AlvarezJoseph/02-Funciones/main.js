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

/**
 * 2. Crea una función que tome un array de strings como parámetro y devuelva un nuevo array con todos los strings en mayúsculas
 */

console.log("Ejercicio 2");

function convertToUppercase(arrayOfStrings) {
  const newArray = [];
  for (let i = 0; i < arrayOfStrings.length; i++) {
    newArray.push(arrayOfStrings[i].toUpperCase());
  }
  return newArray;
}

console.log(convertToUppercase(["hola", "mundo", "programming"]));

/**
 * 3. Crea una función que tome dos números como parámetros y devuelva el resultado de elevar el primer número a la potencia del segundo número:
 */

function potencia(n1, n2) {
  return Math.pow(n1, n2);
}

console.log(potencia(2, 3));

/**
 * 4. Crea una función que tome un array de números como parámetro y devuelva la suma de todos los números del array
 */

function sumaElementosArray(arrNums) {
  let contador = 0;
  for (let i = 0; i < arrNums.length; i++) {
    contador = contador + arrNums[i];
  }
  return contador;
}

console.log(sumaElementosArray([1, 2, 3, 4, 5])); // Output: 10

/**
 * 5. Crea una función que tome un objeto como parámetro y devuelva un array con todas las propiedades del objeto
 */

function propiedadesObjeto(obj) {
  return Object.getOwnPropertyNames(obj);
}

console.log(propiedadesObjeto({ a: 1, b: 2, c: 3 })); // Output: ["a", "b", "c"]
