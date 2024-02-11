console.log("This");

/**
 * This
 * En Javascript "this" se refiere al objeto al cual pertenece en el contexto actual. El valor de "this" depende de cómo se invoca una función o de cómo se accede a un objeto. La referencia de "this" se resuelve dinámicamente en tiempo de ejecución
 */

console.log(this);
console.log(window);
console.log(this === window);

this.nombre = "Contexto Global";
console.log(this.nombre);

function imprimir() {
  console.log(this.nombre);
}

imprimir();

const obj = {
  nombre: "Contexto Objeto",
  imprimir: function () {
    console.log(this.nombre);
  },
};

obj.imprimir();

const obj2 = {
  nombre: "Contexto Objeto2",
  imprimir,
};

obj2.imprimir();

//Arrow function no tiene scope de bloque

const obj3 = {
  nombre: "Contexto Objeto 3",
  imprimir: () => {
    console.log(this.nombre);
  },
};

obj3.imprimir();

//Función constructora si crea su propio scope

function Persona(nombre) {
  this.nombre = nombre;
  /* return function () {
    console.log(this.nombre);
  }; */
  //return console.log(this.nombre);
  return () => console.log(this.nombre);
}

let jon = new Persona("Jon");
jon();
