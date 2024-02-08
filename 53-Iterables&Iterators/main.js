console.log("Iterables & Iterators");

/**
 * Iterable
 * Es cualquier objeto que puede ser iterado o recorrido. Esto significa que puede ser utilizado en un bucle (como un bucle "for ... of") para acceder secuencialmente a sus elementos
 * Un iterable debe implementar el método `Symbol.iterator` en su prototipo. Este método devuelve un objeto llamado iterador
 */

const it = [1, 2, 3];
for (const elemento of it) {
  console.log(elemento);
}

/**
 * Iterador
 * Es un objeto que proporciona un método `next()` que devuelve el siguiente elemento en la secuencia. Cada llamada a `next()` retorna un objeto con dos propiedades `value` (el valor del elemento) y `done` (un indicador booleano que indica si la iteración ha llegado al final)
 * Un iterador debe implementar el método `next()`
 */

const it2 = [1, 2, 3];
const iterator = it[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

/**
 * Objetos iterables comunes
 * Arrays
 * Strings
 * Sets y Maps
 * Objetos con `Symbol.iterator`
 */

//03:45
