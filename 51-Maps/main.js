console.log("Maps");

/**
 * En Javascript Map es un tipo de estructura de datos que permite almacenar pares clave-valor, donde cada clave y cada valor pueden ser de cualquier tipo a diferencia de un objeto regular. Puede incluir objetos y funciones
 *
 * Caracteristicas
 * 1. Pares Clave-Valor: la clave debe ser única y se utiliza para acceder al valor asociado
 * 2. Claves pueden ser de cualquier tipo
 * 3. Iterable
 * 4. Orden de Inserción: los Map mantienen el orden de inserción de los elementos
 * 5. Tamaño dinámico
 */

//Creación de un Map
const myMap = new Map();

//Agregar elementos al Map
myMap.set("clave1", "valor1");
myMap.set(42, "valor2");
myMap.set({ name: "Juan" }, "valor3");

//Obtener un valor por clave
console.log(myMap.get("clave1"));

//Verificar la existencia de una clave
console.log(myMap.has(42));

//Eliminar un elemento por clave
myMap.delete("clave1");

//Iterar sobre los elementos del Map
myMap.forEach((valor, clave) => {
  console.log(`${clave}: ${valor}`);
});

/**
 * Uso Común de Map
 * Almacenamiento de Metadatos: puedes usar un Map para almacenar la información adicional asociada con objetos u otros valores
 * Gestión de Estado: puedes usar un Map para rastrear el estado de diferentes elementos en una aplicación
 * Optimización de búsquedas: cuando necesitas realizar búsquedas eficientes utilizando claves de cualquier tipo
 */

console.log("-----   Mircha   -----");

const mapa = new Map();

mapa.set("nombre", "Jon");
mapa.set("apellido", "Mircha");
mapa.set("edad", 35);

console.log(mapa);
console.log(mapa.size);
console.log(mapa.has("correo"));
console.log(mapa.has("nombre"));
console.log(mapa.get("nombre"));
console.log(mapa.set("nombre", "Jonathan"));
console.log(mapa.get("nombre"));
mapa.delete("apellido");

//característica extraña de los mapas
mapa.set(19, "diecinueve");
mapa.set(false, "falso");
mapa.set({}, {});
console.log(mapa);

for (let [key, value] of mapa) {
  console.log(`Llave: ${key}, Valor: ${value}`);
}

const mapa2 = new Map([
  ["nombre", "kenai"],
  ["edad", 7],
  ["animal", "perro"],
  [null, "nulo"],
]);

console.log(mapa2);

const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

console.log(llavesMapa2);
console.log(valoresMapa2);
