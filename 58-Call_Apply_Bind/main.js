console.log("Call Apply Bind");

/**
 * Las funciones call, apply y bind en JavaScript se utilizan para establecer el contexto (valor de this) de una función cuando es invocada
 *
 * Call: permite invocar una función estableciendo explícitamente el valor de this explícitamente. Recibe como primer parámetro el valor de this y los siguientes son los argumentos que recibirá la función invocada
 */

function greetings() {
  console.log(`Hola ${this.nombre} ${this.apellido}`);
}

const person = {
  nombre: "Juan",
  apellido: "Perez",
};

greetings.call(person);

/**
 * Apply: similar a call pero los argumentos se pasan como un array
 * Es útil cuando los argumentos están en un array o cuando no conoces la cantidad de argumentos que se pasarán a la función
 */

const args = ["Juan", "Perez"];
greetings.apply(person, args);

/**
 * Bind: permite establecer el valor de this y parámetros fijos de la función. Devuelve una nueva función con el contexto vinculado
 */

const greetingsToPerson = greetings.bind(person);
greetingsToPerson();

/**
 * Call y apply invocan la función estableciendo this y los parámetros de forma directa
 * Bind devuelve una función con el contexto y los parámetros establecidos
 */

console.log("-----   Mircha   ------");

console.log(this);
this, (lugar = "Contexto Global");

function saludar(saludo, aQuien) {
  console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}

saludar("Hola", "Kenai");

const obj = {
  lugar: "Contexto Objeto",
};

saludar.call(obj, "Hola", "Jon");
saludar.call(null, "Hola", "Jon");
saludar.call(this, "Hola", "Jon");
saludar.apply(obj, ["Hey", "Hector"]);

this.nombre = "Window";

const persona = {
  nombre: "Nata",
  saludar: function () {
    console.log(`Hola ${this.nombre}`);
  },
};

console.log("saludar");
persona.saludar();

const otraPersona = {
  saludar: persona.saludar.bind(persona),
};

console.log("otraPersona");
otraPersona.saludar();
