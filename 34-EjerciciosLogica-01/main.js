console.log("Este es el main");

/**
 * 1. Programa una función que cuente el número de caracteres de una cadena de texto
 * ej: miFuncion("Hola Mundo") devolvera 10
 */

function contarCaracteres(cadena = "") {
  if (!cadena) {
    console.warn("No ingresaste ninguna cadena");
  } else {
    console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
  }
}

const countChars = (str = "") =>
  !str
    ? console.warn("No ingresaste ninguna cadena")
    : console.info(`La cadena "${str}" tiene ${str.length} caracteres`);

contarCaracteres();
contarCaracteres("Hola Mundo");

countChars();
countChars("Hector Vasquez");

/**
 * 2. Programa una función que te devuelva el texto recortado según el número de caracteres indicados
 * ej: miFuncion("Hola Mundo", 4) devolverá "Hola"
 */

function recortarCadena(cadena, caracteres) {
  console.log(cadena.slice(0, caracteres));
}

recortarCadena("Hola Mundo", 4);

const trimString = (str = "", len = undefined) =>
  !str
    ? console.warn("No ingresaste ninguna cadena")
    : len === undefined
    ? console.warn("No ingresaste la longitud para recortar el texto")
    : console.info(
        `Si recortamos esta cadena "${str}" a ${len} caracteres, resulta "${str.slice(
          0,
          len
        )}"`
      );

trimString();
trimString("Hola Mundo", 4);
trimString("Hola Mundo");
trimString("", 4);

/**
 * 3. Programa una función que dado un string te devuelva un array de textos separados por cierto caracter
 * ej: miFuncion("Hola que tal", " ") devolverá ["hola", "que", "tal"]
 */

function separarCadena(cadena, separador) {
  console.log(cadena.split(separador));
}

separarCadena("Hola que tal", " ");

const splitStr = (str = "", splitter = undefined) =>
  !str
    ? console.warn("No ingresaste ninguna cadena")
    : splitter === undefined
    ? console.warn("No ingresaste un separador")
    : console.info(str.split(splitter));

splitStr();
splitStr("Hola que tal", " ");
splitStr("Hola que tal");
splitStr("", " ");
splitStr("Mon,Tue,Wed,Thu,Fri,Sat,Sun", ",");

/**
 * 4. Programa una función que repita un texto x veces
 * ej: miFuncion("Hola Mundo", 3) devolverá Hola Mundo Hola Mundo Hola Mundo
 */

function repetirCadena(cadena, xveces) {
  console.log(cadena.repeat(xveces));
}

repetirCadena("Hola Mundo ", 3);

const repeatStr = (str = "", xtimes = undefined) => {
  if (!str) return console.warn("No ingresaste un texto");
  if (xtimes === undefined)
    return console.warn("No ingresaste el número de veces");
  if (xtimes === 0) return console.error("El número de veces no puede ser 0");
  if (Math.sign(xtimes) === -1)
    return console.error("El número de veces no puede ser negativo");

  for (let i = 1; i <= xtimes; i++) console.info(`${str}, ${i}`);
};

repeatStr();
repeatStr("Hola Mundo ", 3);
repeatStr("Hola Mundo ", 0);
repeatStr("Hola Mundo ", -1);
repeatStr("Hola Mundo ");
repeatStr("", 3);
