console.log("Array y Objetos en JavaScript");

/**
 * Crear un objeto «persona» con las propiedades «nombre» y «edad» y mostrarlas en la consola.
 */

const objPersona = {
  nombre: "Hector",
  edad: 44,
};

console.log(objPersona);
console.log(objPersona.nombre);
console.log(objPersona.edad);

/**
 * 2. Crear un array «numeros» con los números del 1 al 5 y mostrarlos en la consola.
 */

const numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

/**
 * 3. Agregar una propiedad «direccion» al objeto «persona» con las propiedades «calle» y «numero» y mostrarlas en la consola.
 */

const persona = {
  nombre: "Fabio",
  edad: 44,
  direccion: {
    calle: "Guayaquil",
    numero: 35,
  },
};

console.log(persona.direccion.calle);
console.log(persona.direccion.numero);
