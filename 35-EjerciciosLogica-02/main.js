console.log("Ejercicio 35");
/**
 * 5) Programa una función que invierta las palabras de una cadena de texto,
 * pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
 */

const reverseStr = (str = "") => {
  if (!str) return console.warn("No ingresaste un texto");
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return console.info(newStr);
};

reverseStr("Hola Mundo");

/**
 * 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo,
 * pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
 */

const repeatedPattern = (str = "", pattern = undefined) => {
  if (!str) return console.warn("No ingresaste un texto");
  if (pattern === undefined)
    return console.warn("No ingresaste el patrón a buscar");

  let regex = new RegExp(pattern, "g");
  let coincidences = str.match(regex);
  if (coincidences === null) return console.warn("No hay coincidencias");
  return console.info(coincidences ? coincidences.length : 0);
};

repeatedPattern("hola mundo, adios mundo, hi mundo, hey mundo", "mundo");
repeatedPattern("", "mundo");
repeatedPattern("hola mundo, adios mundo, hi mundo, hey mundo");
repeatedPattern("hola mundo, adios mundo, hi mundo, hey mundo", "o");

/**
 * 7) Programa una función que valide si una palabra o frase dada, es un palíndromo
 * (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
 */

const isPalindrome = (str) => {
  if (!str) return console.warn("No ingresaste un texto");

  let strToLow = str.toLowerCase();
  let splittedStr = strToLow.split("");
  let newStr = "";
  for (let i = splittedStr.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  let newStrToLow = newStr.toLowerCase();
  if (strToLow === newStrToLow) {
    return console.info("Es palíndrome");
  } else {
    return console.info("No es palíndrome");
  }
};

isPalindrome("Salas");

/**
 * 8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
 * pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
 */

const deletePattern = (str, pattern) => {
  if (!str) return console.warn("No ingresaste un texto");
  if (pattern === undefined)
    return console.warn("No ingresaste el patrón a eliminar");

  let regex = new RegExp(pattern, "g");
  let result = str.replace(regex, "");
  return console.info(result);
};

deletePattern("xyz1, xyz2, xyz3, xyz4 y xyz5", "x");
