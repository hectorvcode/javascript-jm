/**
 * Objetos literales
 * Es una forma de definir un objeto utilizando una sintaxis mas concisa y directa
 * Puedes crar objetos en el lugar donde los necesitas sin tener que definir una
 * clase o utilizar el operador `new`
 * La sintaxis básica para un objeto literal es utilizando llaves {} y especificando
 * las propiedades y sus valores dentro del objeto
 */

/**
 * Antes de los objetos literales se hacia algo asi

*/

let nombre = "Kenai";
let edad = 7;
const perro = {
  nombre: nombre,
  edad: edad,
  ladrar: function () {
    console.log("guau, guau");
  },
};

console.log(perro);
perro.ladrar();

/**
 * Usando los objetos literales
 * Si tenemos nombre: nombre, lo dejamos solo nombre
 * Podemos agregar nuevas propiedades que no habían sido declaradas
 * Se escribe de manera simplificada la función
 */

const dog = {
  nombre,
  edad,
  raza: "Criollito",
  ladrar() {
    console.log("guau, guau, guau");
  },
};

console.log(dog);
dog.ladrar();
