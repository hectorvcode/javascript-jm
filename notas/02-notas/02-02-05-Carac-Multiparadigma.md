## Características JavaScript

### Multiparadigma

JavaScript se considera un lenguaje multiparadigma porque admite y permite la programación en varios estilos o paradigmas de programación.

Los paradigmas de programación son enfoques o estilos diferentes para la construcción de software, y JS ofrece soporte para varios de ellos.

1. **Programación Imperativa:** los desarrolladores escriben secuencias de comandos que describen cómo debe llevarse a cabo un cálculo o tarea.

```javascript
//Definición de variables
let x = 5;
let y = 10;

//Realización operaciones paso a paso
let suma = x + y;
let resta = x - y;
let multiplicacion = x * y;

//Impresión de resultados
console.log("Suma: ", suma);
console.log("Resta: ", resta);
console.log("Multiplicación: ", multiplicacion);
```

En el anterior ejemplo, se realiza una serie de operaciones matemáticas paso a paso y los resultados se imprimen en la consola. Cada paso de la operación se define de manera imperativa.

En resumen, la programación imperativa se caracteriza por definir explícitamente las instrucciones y el flujo de control del programa. Proporciona un control detallado sobre la ejecución del programa.

2. **Programación orientada a objetos:** JS permite la creación de objetos y el uso de prototipos para la herencia. Los objetos pueden contener propiedades y métodos.

```javascript
let persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        console.log("Hola, soy " + this.nombre)
    }
};
persona.saludar();
```

3. **Programación Funcional:** se centra en el uso de funciones y en tratar las funciones como ciudadanos de primera clase.

* Funciones como ciudadanos de primera clase: en programación funcional, las funciones son tratadas como cualquier otro valor. Pueden ser asignadas a variables, pasadas como argumentos a otras funciones y retornadas como valores desde otras funciones.

```javascript
//Funcion que suma dos números
function suma(a, b) {
    return a + b;
}

//Asignación de la función a una variable
let operacion =  suma;

//Uso de la función asignada a la variable
let resultado = operacion(3, 4);
console.log(resultado); //Imprime 7
```

En este ejemplo la función 'suma' se asigna a la variable 'operacion' y luego se usa como cualquier otra variable.

* Funciones de orden superior: son aquellas que pueden recibir funciones como argumentos y/o devolver las funciones como resultados. Un ejemplo común es el uso de funciones de 'Array' en JS, como 'map()'.

```javascript
//Función de orden superior que aplica una operación a cada elemento de un array
function aplicarOperacion(array, operacion){
    return array.map(operacion);
}

//Uso de la función de orden superior con una función de cuadrado
let numeros = [1, 2, 3, 4, 5];
let cuadrados =  aplicarOperacion(numeros, funcion(x) {
    return x * x;
});
console.log(cuadrados); //Imprime [1, 4, 9, 16, 25]
```
En este ejemplo, la función 'aplicarOperacion' toma un array y una función como argumentos y aplica la función a cada elemento del array

* Funciones Puras: son funciones que dadas las mismas entradas, siempre producirán el mismo resultado y no tienen efectos secundarios. No dependen de variables externas y no modifican el estado fuera de la función.

```javascript
//Función pura que suma dos números
function sumaPura(a, b) {
    return a + b;
}

//Uso de la función pura
let resultadoPuro = sumaPura(3, 4);
console.log(resultadoPuro); //Imprime 7
```

La función 'sumaPura' es pura porque solo depende de sus argumentos y no tiene efectos secundarios