//Se dice que en JavaScript todo es un objeto, observar la consola para el siguiente ejemplo

let a = new String("Hey");
console.log(a);

/**Objeto
 * Un objeto es una estructura de datos que puede contener datos y
 * funciones relacionados, organizados en pares clave-valor. Los objetos en JavaScript
 * son dinámicos y versátiles, lo que los hace una parte fundamental del lenguaje.
 * Puedes acceder a las propiedades de un objeto utilizando la notación de punto
 * 'objeto.propiedad' o 'objeto['propiedad]'
 */

let persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Ejemploville",
  saludito: function () {
    console.log("¡Hola! desde la función del objeto persona");
    return "Retorno valor";
  },
};

console.log("Objeto Persona", persona);

//Llamar la función asi
console.log("Primera notación: ", persona.saludito());
console.log("Segunda notación: ", persona["saludito"]());

//Puedo declarar un objeto vacío
const b = {};
console.log(b);

//Otra forma de declaración
const c = new Object();
console.log(c);

//Considerar el siguiente objeto:
const hector = {
  nombre: "Hector",
  apellido: "Vasquez",
  edad: 44,
  pasatiempo: ["Videojuegos", "Aprender", "familia"],
  soltero: false,
  contacto: {
    email: "hectorfabiovasquez@gmail.com",
    twitter: "@hectorvcode",
    movil: "573133755040",
  },
  saludar: function () {
    console.log("Hey, saludando desde objeto");
  },
  decirMiNombre: function () {
    console.log(
      `Hola, me llamo ${this.nombre} ${this.apellido}, y me puedes seguir en twitter como ${this.contacto.twitter}`
    );
  },
};

console.log(hector["nombre"]);
console.log(hector.apellido);

/**Atributos
 * Son variables que se encuentran dentro de un objeto
 * A las funciones se les llama métodos
 */

console.log(hector.soltero);

//Imprimir solo familia
console.log(hector.pasatiempo[2]);

//Imprimir twitter
console.log(hector.contacto.twitter);

//Ejecutar función
hector.saludar();

//Usando this dentro de la función puedo concatenar mediante interpolación los valores de nombre y apellido que pertenecen al mismo objeto
hector.decirMiNombre();

console.log("Llaves", Object.keys(hector));
console.log("Valores", Object.values(hector));
console.log("Tiene propiedad", hector.hasOwnProperty("nombre"));
console.log("Tiene propiedad", hector.hasOwnProperty("nacimiento"));
