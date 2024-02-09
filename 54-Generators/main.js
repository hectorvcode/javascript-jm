console.log("Generators");

/**
 * Generadores
 * Son funciones especiales que permiten pausar y reanudar su ejecución en puntos específicos, lo que los hace útiles para escribir código asíncrono de manera más legible y eficiente
 */

/**
 * Sintaxis Especial
 * Se definene con la palabra clave fucntion* y utilizan la palabra yield para pausar la ejecución y devolver un valor
 */

function* miGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

/**
 * Iteradores Automáticos
 * Los generadores implementan automáticamente el protocolo del iterador, lo que significa que puedes usar un bucle for...of para recorrer los valores generados
 */

const iterator = miGenerator();
for (const valor of iterator) {
  console.log(valor);
}

/**
 * Pausa y Reanudación
 * Puedes pausar la ejecución del generador usando yield y luego reanudarla cuando sea necesario
 */

function* contador() {
  yield 1;
  yield 2;
  yield 3;
}

const iter = contador();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

/**
 * Gestión de Asincronía
 * Los generadores son útiles para gestionar operaciones asíncronas de una manera más legible y estructurada. Se pueden combinar con Promesas para crear código asíncrono más fácil de entender
 */

function* miGeneradorAsincrono() {
  const result1 = yield doSomethingAsync();
  const result2 = yield doOtherAsyncThing(result1);
  return result2;
}

console.log("-----   Mircha   -----");

function* iterable() {
  yield "hola";
  console.log("Hola Consola");
  yield "hola2";
  console.log("Seguimos con mas instrucciones de nuestro código");
  yield "hola3";
  yield "hola4";
}

let iterador = iterable();
/* console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next()); */

for (let y of iterador) {
  console.log(y);
}

const arr = [...iterable()];
console.log(arr);

function cuadrado(val) {
  setTimeout(() => {
    console.log({ val, resultado: val * val });
  }, Math.random() * 1000);
}
