/** Función
 *  es un bloque de código reutilizable que realiza una tarea específica
 *  Las funciones en JavaScript son un tipo especial de objetos
 *  Las funciones son ciudadanos de primera clase porque pueden asignarse a un valor
 *  y pueden pasarse como argumentos y usarse como valor de reotrno
 */

function nombreDeLaFuncion(parametro1, parametro2) {
  //Código que realiza alguna tarea
  //Puede inclir declaración de variables, condicionales, bucles

  //Opcional: puedes retornar un valor al final de la función
  return resultado;
}

//Función que suma dos números

function suma(a, b) {
  let resultado = a + b;
  return resultado;
}

//Llamada a la función
let resultadoSuma = suma(3, 5);
console.log(resultadoSuma);

//Cuando encuentra la palabra return, lo que se encuentra antes se ejecuta y lo que se encuentra despues se ignora

function funcionDevuelveValor() {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
  return "Retorna string";
}

//Almacenamos el valor de la función en una variable
let valorDeFuncion = funcionDevuelveValor();
console.log(valorDeFuncion);

//Declarar funcion

function saludar(nombre, edad) {
  console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años`);
}

//Invocar funcion
saludar("Chispita", 3);

saludar(); //Imprime undefined

//Asignar valores de parámetros por defecto
//Se igualan los parámetros con el valor que decidamos 

function restar(x = 5, y = 3) {
  let resultadoResta = x - y;
  return resultadoResta;
}

let verResultado = restar();
console.log("El resultado de la resta es: ", verResultado);

/**
 * 
 */

function funcionDeclarada() {
  
}