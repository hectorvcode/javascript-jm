## Características JavaScript

### Dinámico

Se considera un lenguaje dinámico por varias características clave relacionadas con la manipulación de tipos de datos y la flexibilidad en tiempo de ejecución.

1. Tipado Dinámico: no es necesario declarar el tipo de una variable antes de usarla. Los tipos de datos de las variables pueden cambiar durante la ejecución del programa.

2. Asignación Dinámica: puedes asignar valores de diferentes tipos de datos a una variable en diferentes momentos del programa sin necesidad de restringirte a un tipo específico

``` javascript
let x = 5;   // x es de tipo número
x = "Hola";  // x ahora es de tipo cadena
```

3. Creación dinámica de objetos: puedes crear y modificar objetos dinámicamente durante la ejecución del programa.

``` javascript
let persona = {nombre: "Juan", edad: 30};
persona.profesion = "Desarrollador"; // Se añade propiedad dinámicamente
```

4. Funciones como objetos de primera clase: las funciones son ciudadanos de primera clase, lo que significa que pueden ser tratadas como cualquier otra variable. Puedes pasar funciones como argumentos, asignarlas a variables y retornarlas desde otras funciones dinámicamente

```javascript
function suma(a, b) {
    return a + b;
}

let operacion = suma; //Se asigna la función a otra variable
console.log(operacion(2,3)); //Imprime 5
```

5. Evaluación dinámica de código: permite la ejecución dinámica de cósido a través de funciones como eval() y Function(). Puedes crear y ejecutar código en tiempo de ejecución

```javascript
let operacion = new Function('a', 'b', 'return a + b');
console.log(operacion(2,3)); //Imprime 5
```