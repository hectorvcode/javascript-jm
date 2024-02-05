console.log("Symbols");

/**
 * Symbol
 * Representa un identificador único e inmutable que se utiliza comunmente como propiedad de un objeto para evitar colisiones de nombres en el espacio de nombres
 *
 * Características
 * Unico e inmutable: cada llamada devuelve un valor único, dos Symbol nunca serán iguales
 * No Enumerado: no aparecen en las iteraciones de propiedades de objetos. Esto los hace útiles para crear propiedades ocultas en los objetos
 * No convertible a cadena implícitamente: lso symbol no se convierten automáticamente a cadenas cuando se utilizan en contexto de cadena
 *
 * Casos de uso comunes
 * Propiedades ocultas: se usan para almacenar metadatos que no deben ser accesibles de manera convencional
 * Evitar colisiones de nombres
 * Iteración segura: al no ser enumerables, los simbolos no aparecen en la iteraciones, lo que puede ser útil para garantizar que ciertas propiedades no se procesen accidentalmente
 */

const person = {
  name: "Juan",
  age: 30,
  [Symbol("id")]: 123,
};

console.log(Object.keys(person));
console.log(Object.getOwnPropertySymbols(person));

console.log("----- Mircha  -----");

let id = "Hola";
let id2 = "Hola";

console.log(id === id2);

let id3 = Symbol("id3");
let id4 = Symbol("id4");

console.log(id3 === id4);
console.log(id3, id4);
console.log(typeof id3, typeof id4);

const NOMBRE = Symbol("nombre");
const SALUDAR = Symbol("saludar");

const persona = {
  [NOMBRE]: "jon",
  edad: 35,
};

console.log(persona);

persona.NOMBRE = "HectorV";
console.log(persona);

console.log(persona.NOMBRE);
console.log(persona[NOMBRE]);

persona[SALUDAR] = function () {
  console.log(`Hola`);
};

console.log(persona);

persona[SALUDAR]();

for (let propiedad in persona) {
  console.log(propiedad);
  console.log(persona[propiedad]);
}

console.log(Object.getOwnPropertySymbols(persona));
