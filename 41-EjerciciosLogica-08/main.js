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
 * Mircha
 */
console.log("---------  Mircha 24  ---------");

const ordenarArreglo = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de números");
  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");
  if (arr.length === 0) return console.error("El arreglo está vacío");
  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "${num}" ingresado, no es un número`);
  }

  return console.info({
    arr,
    asc: arr.map((el) => el).sort(),
    desc: arr
      .map((el) => el)
      .sort()
      .reverse(),
  });
};

ordenarArreglo([9, 5, 1, 6, 7, 3, 5]);

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
 * Mircha
 */
console.log("---------  Mircha 24  ---------");

const quitarDuplicados = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de números");
  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");
  if (arr.length === 0) return console.error("El arreglo está vacío");
  if (arr.length === 1)
    return console.error("El arreglo debe tener al menos 2 elementos");

  //Primera forma de hacerlo
  /* return console.info({
    original: arr,
    sinDuplicados: arr.filter(
      (valor, index, self) => self.indexOf(valor) === index
    ),
  }); */

  //Segunda Forma de hacerlo
  return console.info({
    original: arr,
    sinDuplicados: [...new Set(arr)],
  });
};

quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);

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

/**
 * Mircha
 */
console.log("---------  Mircha 24  ---------");

const promedio = (arr = undefined) => {
  if (arr === undefined)
    return console.warn("No ingresaste un arreglo de números");
  if (!(arr instanceof Array))
    return console.error("El valor que ingresaste no es un arreglo");
  if (arr.length === 0) return console.error("El arreglo está vacío");
  for (let num of arr) {
    if (typeof num !== "number")
      return console.error(`El valor "${num}" ingresado, no es un número`);
  }

  return console.info(
    arr.reduce((total, num, index, arr) => {
      total += num;
      if (index === arr.length - 1) {
        return `El promedio de ${arr.join(" + ")} es ${total / arr.length}`;
      } else {
        return total;
      }
    })
  );
};

promedio([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
