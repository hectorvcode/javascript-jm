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
