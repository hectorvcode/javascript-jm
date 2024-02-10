console.log("This");

/**
 * This
 * En Javascript "this" se refiere al objeto al cual pertenece en el contexto actual. El valor de "this" depende de cómo se invoca una función o de cómo se accede a un objeto. La referencia de "this" se resuelve dinámicamente en tiempo de ejecución
 */

console.log(this);

function ejemploFuncion() {
  console.log(this);
}

ejemploFuncion();
