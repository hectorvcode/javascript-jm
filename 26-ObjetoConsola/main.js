console.log(console);
console.error("Esto es un error");
console.warn("Esto es un aviso");
console.info("Este es un mensaje informativo");
console.log("Un registro de lo que pasa en la app");

let nombre = "Jon";
apellido = "Mircha";
edad = 35;

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nombre, apellido, edad);
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);
console.log(`Hola mi nombre es %s %s y tengo %d años`);
console.log(`Hola mi nombre es %s %s y tengo %d años`, nombre, apellido, edad);

console.clear();

console.log(window);
console.log(document);
console.dir(window);
console.dir(document);

console.clear();

console.group("Cursos de @jonmircha en YouTube");
console.log("JavaScript");
console.log("NodeJS");
console.log("Progresive Web Apps");
console.log("FlexBox");
console.log("Diseño y Programaciòn Web");
console.groupEnd();

console.groupCollapsed("Cursos de @jonmircha en YouTube");
console.log("JavaScript");
console.log("NodeJS");
console.log("Progresive Web Apps");
console.log("FlexBox");
console.log("Diseño y Programaciòn Web");
console.groupEnd();

console.clear();

console.table(Object.entries(console).sort());
const numeros = [1, 2, 3, 4, 5];
const vocales = ["a", "e", "i", "o", "u"];
console.table(numeros);
console.table(vocales);
const perro = {
  nombre: "Bonie",
  raza: "boxer",
  color: "cafe",
};
console.table(perro);

console.clear();

console.time("Tarda");
const arreglo = Array(1000000);
for (let i = 0; i < arreglo.length; i++) {
  arreglo[i] = i;
}
console.timeEnd("Tarda");

console.clear();

for (let i = 0; i < 100; i++) {
  console.count("Codigo For");
  console.log(i);
}

console.clear();

let x = 5;
y = 2;
pruebaXY = "X siempre debe ser menor que Y";

console.assert(x < y, { x, y, pruebaXY });
