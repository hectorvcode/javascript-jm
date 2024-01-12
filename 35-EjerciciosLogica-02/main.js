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

console.log("----- Mircha -----");

const invertirCadena = (cadena) =>
  !cadena
    ? console.warn("No ingresaste una cadena")
    : console.info(cadena.split("").reverse().join(""));

invertirCadena("Hey World!");

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

console.log("----- Mircha -----");

const textoEnCadena = (cadena = "", texto = "") => {
  if (!cadena) return console.warn("No ingresaste un texto");
  if (!texto) return console.warn("No ingresaste el patrón a buscar");

  let i = 0;
  contador = 0;

  while (i !== -1) {
    i = cadena.indexOf(texto, i);
    if (i !== -1) {
      i++;
      contador++;
    }
  }
  return console.info(`La palabra ${texto} se repite ${contador} veces`);
};

textoEnCadena("Hi world!, bye world, hey world", "world");

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

console.log("----- Mircha -----");

isPalindrome("Salas");

const palindromo = (palabra = "") => {
  if (!palabra) return console.warn("No ingresaste un texto");

  palabra = palabra.toLowerCase();
  let alReves = palabra.split("").reverse().join("");

  return palabra === alReves
    ? console.info(
        `Si es palíndromo: Palabra original=${palabra}, Palabra al revés=${alReves}`
      )
    : console.info(
        `No es palíndromo: Palabra original=${palabra}, Palabra al revés=${alReves}`
      );
};

palindromo("Salas");
palindromo("Salasi");

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

deletePattern("xyz1, xyz2, xyz3, xyz4 y xyz5", ",");

console.log("----- Mircha -----");

const eliminarCaracteres = (texto, patron) =>
  !texto
    ? console.warn("No ingresaste texto")
    : !patron
    ? console.warn("No ingresaste patron")
    : console.info(texto.replace(new RegExp(patron, "ig"), ""));

eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
