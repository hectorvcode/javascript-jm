console.log("Ejercicios 42");

/**
 * 24) Programa una función que dado un arreglo de números devuelva un objeto
 * con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente
 * y el segundo de forma descendiente,
 * pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
 */

const sortArray = (array) => {
  let asc = [...array];
  let desc = [...array];

  asc.sort((a, b) => a - b);
  desc.sort((a, b) => b - a);

  return console.info({
    asc,
    desc,
  });
};

sortArray([7, 5, 7, 8, 6]);

/**
 * 25) Programa una función que dado un arreglo de elementos, elimine los duplicados,
 * pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
 */

const deleteDupl = (arr) => {
  const uniqueValues = [];

  arr.forEach((element) => {
    if (uniqueValues.indexOf(element) === -1) {
      uniqueValues.push(element);
    }
  });
  return console.info(uniqueValues);
};

deleteDupl(["x", 10, "x", 2, "10", 10, true, true]);

/**
 * 26) Programa una función que dado un arreglo de números obtenga el promedio,
 * pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
 */

const averageArr = (arr) => {
  let suma = 0;

  for (let i = 0; i < arr.length; i++) {
    suma = suma + arr[i];
  }

  return console.info(suma / arr.length);
};

averageArr([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
