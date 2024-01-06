/**
 * En JS un prototipo es un mecanismo que permite a un objeto heredar
 * propiedades y métodos de otro objeto. Cada objeto en JS tiene un prototipo
 * y cuando se intenta acceder a una propiedad o metodo de un objeto, el motor de
 * JS busca primero en el propio objeto y luego en su cadena de prototipos.
 *
 * Cada objeto puede tener un prototipo que es otro objeto del cual hereda propiedades
 * y mètodos. Cuando se intenta acceder a una propiedad o método de un objeto y
 * este no la tiene JS busca en su propio prototipo y así sucesivamente hasta llegar
 * al objeto 'Object.prototype', que es el último eslabón de la cadena de
 * prototipos.
 *
 * Ejemplo:
 */

//Función constructora (prototipo)
function Vehiculo() {
  this.tipo = "Automóvil";
}

//Agregando un método al prototipo de Vehiculo
Vehiculo.prototype.acelerar = function () {
  console.log("Acelerando... Run Run");
};

//Objeto creado mediante la función contstructora Vehiculo
let coche = new Vehiculo();

//Agregando una propiedad al objeto coche
coche.modelo = "Sedán";

//Accediendo a propiedades y métodos
console.log(coche.modelo);
coche.acelerar();
console.log(coche.tipo);

/**
 * 'vehiculo' es un objeto que actúa como prototipo
 * 'coche' es un objeto que hereda del prototipo 'vehiculo' mediante 'Object.create(vehiculo)'
 * El objeto 'coche' tiene su propia propiedad 'modelo', pero hereda el método
 * 'acelerar' y la propiedad 'tipo' de su prototipo 'vehiculo'
 */

//Métodos agregados al prototipo de la función constructora
Animal.prototype.sonar = function () {
  console.log("Hago sonidos porque estoy vivo");
};

Animal.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre}`);
};

//Función constructora donde se asignan los métodos al prototipo
function Animal(nombre, genero) {
  //Atributos
  this.nombre = nombre;
  this.genero = genero;
}

//Herencia Prototípica
function Perro(nombre, genero, tamanio) {
  this.super = Animal;
  this.super(nombre, genero);
  this.tamanio = tamanio;
}

//Perro esta heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//Sobreescritura de metodos del prototipo padre en el hijo
Perro.prototype.sonar = function () {
  console.log("Soy un perro y ladro");
};

Perro.prototype.ladrar = function () {
  console.log("Guau, guau");
};

const snoopy = new Perro("Snoopy", "Macho", "Mediano");
console.log(snoopy);

snoopy.sonar();
snoopy.saludar();
snoopy.ladrar();
