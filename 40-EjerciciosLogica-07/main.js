console.log("Ejercicios 36");

/**
 * 21) Programa una función que dado un array numérico devuelve otro
 * array con los números elevados al cuadrado,
 * pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
 */

const sqrtArray = (numArray) =>
  console.info(numArray.map((elemento) => Math.pow(elemento, 2)));
sqrtArray([1, 4, 5]);

/**
 * 22) Programa una función que dado un array devuelva el número mas alto
 * y el más bajo de dicho array,
 * pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
 */

const searchLowerHigher = (numArray) => {
  let sortedArray = numArray.sort();
  let lowerNum = sortedArray[0];
  let higherNum = sortedArray[sortedArray.length - 1];

  return console.info(`El menor es ${lowerNum} y el mayor es ${higherNum}`);
};

searchLowerHigher([1, 4, 5, 99, -60]);

/**
 * 23) Programa una función que dado un array de números devuelva un objeto
 * con 2 arreglos en el primero almacena los números pares y en el segundo los impares,
 * pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
 */

const splitOddOrEven = (arr) => {
  const evenArray = [];
  const oddArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      oddArray.push(arr[i]);
    } else {
      evenArray.push(arr[i]);
    }
  }
  return console.info({
    pares: oddArray,
    impares: evenArray,
  });
};

splitOddOrEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
