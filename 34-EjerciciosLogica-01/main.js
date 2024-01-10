console.log("Este es el main");

/**
 * 1. Programa una función que cuente el número de caracteres de una cadena de texto
 * ej: miFuncion("Hola Mundo") devolvera 10
 */

function cuentaCaracteres(cadena) {
  console.log(cadena.length);
}

cuentaCaracteres("Hola Mundo");

/**
 * 2. Programa una función que te devuelva el texto recortado según el número de caracteres indicados
 * ej: miFuncion("Hola Mundo", 4) devolverá "Hola"
 */

function recortarCadena(cadena, caracteres) {
  console.log(cadena.slice(0, caracteres));
}

recortarCadena("Hola Mundo", 4);

/**
 * 3. Programa una función que dado un string te devuelva un array de textos separados por cierto caracter
 * ej: miFuncion("Hola que tal", " ") devolverá ["hola", "que", "tal"]
 */

function separarCadena(cadena, separador) {
  console.log(cadena.split(separador));
}

separarCadena("Hola que tal", " ");

/**
 * 4. Programa una función que repita un texto x veces
 * ej: miFuncion("Hola Mundo", 3) devolverá Hola Mundo Hola Mundo Hola Mundo
 */

function repetirCadena(cadena, xveces) {
  console.log(cadena.repeat(xveces));
}

repetirCadena("Hola Mundo ", 3);
