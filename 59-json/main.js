console.log("json");

/**
 * json
 * JavasScript Object Notation, es un formato estándar para representar datos estructurados basado en la sintaxis de objetos de JavaScript. Sus principales características son:
 * Es un formato de texto ligero para el intercambio de datos
 * Es completamente independiente del lenguaje, puede ser utilizado con cualquier lenguaje de programación
 * Utiliza la estructura clave/valor
 * Las claves deben ser cadenas, los valores pueden ser cadenas, números, booleanos, arreglos y objetos null
 * Es ideal para el intercambio de datos entre aplicaciones cliente-servidor
 * Puede ser generado y parseado por la mayoria de los lenguajes de programación
 * Javascript provee métodos nativos para convertir entre ogjetos y json
 *  JSON.parse(): convierte string JSON a objeto
 *  JSON.stringify(): convierte el valor de JavaScript a string JSON
 *
 * JSON es un formato ligero de intercambio de datos, fácil de leer y escribir para máquinas y humanos. Su adopción en APIs y web services lo ha convertido en un estándar ubicuo para el intercambio de información
 */

/**
 * Pagina oficial de Json
 * json.org/json-es.html
 */

const jsonObj = {
  cadena: "Jon",
  numero: 35,
  booleano: true,
  arreglo: ["correr", "programar", "cocinar"],
  objeto: {
    twitter: "@jonmircha",
    email: "jonmircha@gmail.com",
  },
  nulo: null,
};

console.log(jsonObj);

console.log(JSON);

console.log("{}");
console.log(JSON.parse("{}"));
console.log(JSON.parse("[1, 2, 3]"));
console.log(JSON.parse("true"));
console.log(JSON.parse("false"));
console.log(JSON.parse("19"));
console.log(JSON.parse("null"));
//console.log(JSON.parse("'Hola Mundo'"));
//console.log(JSON.parse("undefined"));

console.log("type of: ", typeof JSON.stringify(true));
console.log(JSON.stringify({}));
console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.stringify(true));
console.log(JSON.stringify(null));
console.log(JSON.stringify({ x: 2, y: 3 }));
console.log(JSON.stringify({ jsonObj }));
console.log(
  JSON.parse(
    '{"jsonObj":{"cadena":"Jon","numero":35,"booleano":true,"arreglo":["correr","programar","cocinar"],"objeto":{"twitter":"@jonmircha","email":"jonmircha@gmail.com"},"nulo":null}}'
  )
);
