/**Arreglo o Array
 * En JavaScript un arreglo o array es una estructura de datos que permite almacenar
 * varios valores en una única variable. Estos valores pueden ser de cualquier tipo, como
 * números, cadenas de texto, objetos, funciones u otros arreglos. Los arreglos son
 * objetos indexados, lo que significa que cada elemento en el arreglo tiene un índice
 * numérico que indica su posición
 */

const a = [];
const b = [1, true, "Hola", ["A", "B", "C"], [1, 2, 3], { grado: 6, edad: 12 }];

console.log(a);
console.log(b);
console.log(b.length);

//Si deseo imprimir únicamente la palabro "Hola"
console.log(b[2]);

//Si quiero imprimir la letra C del arreglo interno
console.log(b[3][2]);

//Si quiero imprimir el número 3 del arreglo que se encuentra como elemento del arreglo b
console.log(b[4][2]);

//Otra forma de escribir arreglos
const c = Array.of("X", "Y", "Z", 9, 8, 7);
console.log(c);

//Método para llenar un arreglo
const d = Array(100).fill(false);
console.log(d);

//Forma que ha caido en desuso
const e = new Array();
console.log(e);

const f = new Array(1, 2, 3, true, false);
console.log(f);

//Ahora un ejercicio incluyendo una función como elemento de un array
console.log("Función como elemento");
function saludarDesdeFuncion() {
  console.log("Hola desde la función");
}

const miArreglo = [
  42,
  true,
  "Hola mundo!",
  [1, 2, 3],
  { nombre: "Hector" },
  saludarDesdeFuncion,
];

//Para imprimir únicamente la función
miArreglo[5]();

//Para imprimir todo el arreglo
console.log(miArreglo);

/**
 * Principales métodos de los arreglos
 */

const colores = ["rojo", "verde", "azul"];
console.log(colores);

/**Método Push
 * Se utiliza para agregar uno o más elmentos al final de un arreglo.
 * Modifica el arreglo original y devuelve la nueva longitud del arreglo.
 */

colores.push("Negro");
console.log(colores);

/**Método Pop
 * Se utiliza para eliminar el último elemento de un array. Consideraciones:
 * Elimina el último elemento de un array y lo devuelve. El array original se modifica
 * Si el array está vacío devuelve undefined
 * Es un método mutable(modifica el array original)
 */

colores.pop();
console.log(colores);

/** Método ForEach
 * Es un método disponible para los arreglos que permite
 * ejecutar una función proporcionada una vez por cada elemento del arreglo. Es una
 * forma más concisa y legible de iterar sobre los elmentos de un arreglo en
 * comparación con un bucle for tradicional
*/

//Imprime una lista de los elementos del array de colores
colores.forEach(function(element, index) {
  console.log(`<li id="${index}">${element}</li>`);
});

/**
 * La documentación ofrece la explicación de cada uno de los métodos
 * https://developer.mozilla.org/en-US/
 */