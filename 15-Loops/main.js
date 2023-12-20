/**
 * Bucles
 *
 */

let contador = 0;

//while: crea un bucle que ser ejecuta mientras se cumpla una condición
while (contador < 10) {
  console.log("while " + contador);
  contador++;
}

//do while: similar a while pero se ejecuta al menos una vez
do {
  console.log("do while " + contador);
  contador++;
} while (contador < 10);

//for: ejecuta código repetidas veces en un bucle

for (let i = 0; i < 10; i++) {
  console.log("for " + i);
}

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for (let i = 0; i < numeros.length; i++) {
  console.log("numeros " + numeros[i]);
}

const jon = {
  nombre: "Jon",
  apellido: "Mircha",
  edad: 35,
};

/**
 * Elije for...in cuando necesites iterar sobre las propiedades de un objeto
 * Elije for...of cuando necesites iterar sobre los elementos de un objeto
 */

//for in: permite iterar cada una de las propiedades de un objeto primitivo

for (const propiedad in jon) {
  console.log(`Key: ${propiedad}, Value: ${jon[propiedad]}`);
}

//for of: Permite recorrer cada uno de los elementos de Javascript que sea iterable

for (const elemento of numeros) {
  console.log("forof " + elemento);
}

let cadenaTexto = "Hola mundo";

for (const caracter of cadenaTexto) {
  console.log("caracter " + caracter);
}
