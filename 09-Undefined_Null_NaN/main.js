console.log("Undefined chapter");

/** Son valores especiales que indican la ausencia o invalidez de datos en diferentes contextos
 *
 * 1. Undefined: es un valor primitivo que se asigna automáticamente a las variables
 * que han sido declaradas pero no inicializadas.
 * También es el valor de retorno predeterminado para las funciones que no tienen
 * una declaración return
 *
 */

let variableUndefined;
console.log(variableUndefined); // Imprime undefined

/**
 * 2. Null: es un valor especial que representa la ausencia intencional de cualquier
 * objeto, valor o referencia
 * Se puede asignar explícitamente a una variable para indicar que la variable no
 * tiene un valor válido
 */

let variableNull = null;
console.log(variableNull); // Imprime null

/**
 * 3. NaN es un valor especial que indica que una operación matemática resultó en un
 * valor que no es un número válido
 * Por ejemplo 0/0 o cualquier operación que involucre operaciones no numéricas
 */

let variableNaN = "Hola" / 2;
console.log(variableNaN); //Imprime NaN

//undefined es asignada por JS mientras null es asignada por el desarrollador
