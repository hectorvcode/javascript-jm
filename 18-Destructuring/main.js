/**
 * Destructuring
 * Es una característica de JAvaScript que permite extraer valores de arreglos o
 * propiedades de objetos de una manera mas concisa. Esto implica la asignación
 * de valores a variables y el acceso a propiedades
 */

//Destructuring de arreglos
let numbers = [1, 2, 3];
let [a, b, c] = numbers;
console.log(a);
console.log(b);
console.log(c);

//Destructuring de objetos
let subject = { nombre: "Juan", edad: 30 };
let { nombre, edad } = subject;
console.log(nombre);
console.log(edad);

//Destructuring con Renombramiento
let person = { name: "Hector", age: 44 };
let { name: primerNombre, age: años } = person;
console.log(primerNombre);
console.log(años);

//Destructuring Parámetros Funciones
function mostrarInfo({ firstName, yearsOld }) {
  console.log(`Nombre: ${firstName}, Edad: ${yearsOld}`);
}

let individuo = { firstName: "Hector Fabio", yearsOld: 43 };
mostrarInfo(individuo);

/**
 * Una forma de hacerlo sin destructuring
 */

const numerosPrimos = [1, 3, 5, 7];
let uno = numerosPrimos[0];
let tres = numerosPrimos[1];
let cinco = numerosPrimos[2];
let siete = numerosPrimos[3];
console.log(`Números primos: ${uno}, ${tres}, ${cinco}, ${siete}`);

/**
 * La destructuración es útil cuando queremos asignar una variable a cada elemento
 * del arreglo
 */

const [one, two, three, four] = numerosPrimos;
console.log(`Con Destructuring: ${one}, ${two}, ${three}, ${four}`);

let persona = {
  mainName: "Jon",
  lastName: "Mircha",
  mainAge: 35,
};

let { mainName, lastName, mainAge } = persona;
console.log(mainName, lastName, mainAge);
