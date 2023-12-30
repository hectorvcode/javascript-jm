/**
 * Prototipos
 * JavaScript es un lenguaje orientado a objetos basado en prototipos. En lugar de
 * clases, como lenguajes de programación tradicionales, JavaScript utiliza
 * prototipos para compartir propiedades y comportamientos entre objetos
 */

/**
 * Objetos y funciones constructoras
 * Un prototipo es un objeto del cual otro objeto hereda propiedades y
 * métodos. Cada oobjeto en JavaScript tiene un prototipo, que es otro objeto al que se
 * delegan propiedades y métodos del objeto original
 *
 * La forma común de crear objetos en JavaScript es mediante funciones constructor
 * y el uso de la palabra clave 'new'. Las funciones constructoras actúan como
 * "Plantillas" para crear objetos y se pueden extender mediante la adicion de
 * propiedades y métodos al objeto prototype de la función
 */

//Función Constructora
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

//Creación de un objeto usando la función constructora
let persona1 = new Persona("Juan", 30);

console.log(persona1.nombre);

/**
 * Prototype Chain:
 * Cuando se intenta acceder a una propiedad o método de un objeto, JavaScript busca
 * primero en el objeto propio. Si no encuentra la propiedad, busca en el prototipo del
 * objeto. Este proceso continúa hasta llegar al objeto 'Object.prototype', que es el
 * último eslabón de la cadena de prototipoas
 */

console.log(persona1.toString());
//En realidad está llamando a Object.prototype.toString()
//toString() es un método heredado de Object.prototype

/**
 * Agregar propiedades y métodos al prototipo
 * Al agregar un método al prototipo, todas las instancias de 'Persona' heredarán ese
 * método. Esto es más eficiente en términos de memoria, ya que todas las instancias
 * comparten una única copia del método en lugar de tener su propia copia
 */

//Agregar un método al prototipo de persona
Persona.prototype.saludar = function () {
  console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
};

persona1.saludar();

/**
 * Resumen
 * En JavaScript, los prototipos son utilizados para compartir propiedades y métodos
 * entre objetos
 *
 * Los objetos en JavaScript tienen un prototipo y al acceder a una propiedad o
 * método, JS busca en la cadena de prototipos
 *
 * Las funciones constructoras y el prototipo son fundamentales para la herencia y la
 * creación de objetos en JavaScript
 */

/**
 * POO
 * Clases: modelo a seguir
 *
 * Objetos: es una instancia de una clase
 *
 * Atributos: es una característica o propiedad del objeto (son variales
 * dentro de un objeto)
 *
 * Métodos: son las acciones que un objeto puede realizar (son funciones
 * dentro de un objeto)
 */

const caricatura = {
  nombre: "Snoopy",
  sonar() {
    console.log("Hago sonidos porque estoy vivo");
  },
};

const caricatura2 = {
  nombre: "Lola Bunny",
  sonar() {
    console.log("Hago sonidos porque estoy vivo");
  },
};

console.log(caricatura);
console.log(caricatura2);

//Función constructora donde se asignan los métodos al prototipo
function Animal(nombre, genero) {
  //Atributos
  this.nombre = nombre;
  this.genero = genero;

  //Métodos
  /* this.sonar = function () {
    console.log("Hago sonidos porque estoy vivo");
  };

  this.saludar = function () {
    console.log(`Hola me llamo ${this.nombre}`);
  }; */
}

//sacamos los métodos comentados
//Métodos agregados al prototipo de la función constructora
Animal.prototype.sonar = function () {
  console.log("Hago sonidos porque estoy vivo");
};

Animal.prototype.saludar = function () {
  console.log(`Hola me llamo ${this.nombre}`);
};

const snoopy = new Animal("SnoopDog", "Male");
lolaBunny = new Animal("Lola Bunny", "Fem");

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
snoopy.saludar();

lolaBunny.sonar();
lolaBunny.saludar();
