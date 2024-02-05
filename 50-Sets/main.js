console.log("Sets");

/**
 * Set es un tipo de colección de valores únicos. Un objeto "Set" puede almacenar valores de cualquier tipo y cada valor debe ser único dentro del conjunto. No puede haber duplicados
 *
 * Características
 * 1. Valores Unicos: si intentas agregar el mismo valor más de una vez, se ignora
 * 2. No Ordenados: a diferencia de los array, los conjuntos no mantienen un orden específico de los elementos
 * 3. Iterable: puedes iterar sobre los elementos de un conjunto utilizando bucles o métodos
 * 4. Métodos para manipular el conjunto: los conjuntos proporcionan métodos para agregar, eliminar y verificar la existencia de elementos.
 */

const numbers = [1, 2, 3, 4, 3, 2, 1];
const numbersSet = new Set(numbers);
const uniqueNumbers = Array.from(numbersSet);

console.log(uniqueNumbers);

console.log("-----   Mircha   -----");

const set = new Set([
  1,
  2,
  3,
  3,
  4,
  5,
  true,
  false,
  false,
  {},
  {},
  "hola",
  "Hola",
]);
console.log(set);
console.log(set.size);

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(false);
set2.add(true);
set2.add({});

console.log(set2);
console.log(set2.size);

console.log("Recorriendo Set");
for (item of set) {
  console.log(item);
}

console.log("Recorriendo Set 2");
set2.forEach((item) => console.log(item));

console.log(set[0]);

let arr = Array.from(set);
console.log(arr);
console.log(arr[0]);
console.log(arr[9]);

set.delete("Hola");
console.log(set);

console.log(set.has("hola"));
console.log(set.has(19));

set2.clear();
console.log(set2);
