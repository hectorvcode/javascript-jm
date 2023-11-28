# Hoisting

Es un comportamiento en JavaScript donde las declaraciones de variables y funciones son elevadas al principio de su contexto de ejecución durante la fase de compilación antes que se ejecute el código.

Aunque puedas usar una variable o función antes de su declaración real en el código, la declaración se eleva al inicio de su ámbito

## Var

```javascript
console.log(x); //Imprime 'undefined', no genera error

var x = 5;

console.log(x); //Imprime 5
```

Este código puede ser sorprendente a primera vista pero se puede entender mejor si lo desglosamos en dos fases: la fase de declaración (hoisting) y la fase de ejecución

### Fase de Declaración (Hoisting)

Durante esta fase el código se procesa y las declaraciones de variables son elevadas al inicio del contexto de ejecución. En este caso la variable x es declarada, pero no inicializada, por lo que toma el valor undefined

```javascript
var x; //Declaración de la variable x
console.log(x); //Imprime undefined
x = 5; //Inicialización de la variable x
```

### Fase de Ejecución

En la fase de ejecución, el código se ejecuta en el orden en que aparece en el programa. Ahora x está inicializada con el valor de 5

```javascript
console.log(x); //Imprime 5
```

Es importante notar que solo la declaración de la variable **x** fue izada al inicio, no la inicialización. Por eso la primera impresión de **x** muestra **undefined** y la segunda impresión después de la inicialización muestra el valor real de **x**

## Segundo ejemplo con var

```javascript
console.log(a); //Imprime undefined

if (true) {
    var a = 10;
}

console.log(a); //Imprime 10
```

### Fase de Declaración (Hoisting)

Durante la fase de declaración, la variable **a** es elevada al inicio del contexto de ejecución, pero aún no está inicializada. La declaración de la variable se mueve hacia arriba en el código.

```javascript
var a; //Declaración de la variable a
console.log(a); //Imprime undefined

if(true) {
    a = 10; //Inicialización de la variable a
}
```


### Fase de Ejecución
El código se muestra en el orden que aparece en el programa. La primera impresión de **a** muestra **undefined** ya que **a** fue declarada pero no inicializada. Luego dentro del bloque if **a** se inicializa con el valor **10**.

```javascript
console.log(a); //imprime 10
```

## Let

A diferencia de var, al usar let no se iza al inicio del bloque de código o la función

```javascript
console.log(b); //Genera error ya que b no está definida en este punto

if(true) {
    let b = 20;
    console.log(b); //Imprime 20
}

console.log(b); //Genera error ya que b no está definida en este punto
```

### Fase de Declaración (Hoisting):

Durante la fase de declaración, la variable b no es izada al inicio de contexto de ejecución. Por lo tanto intentar acceder a **b** antes de su declaración genera un error

### Fase de Ejecución

En la fase de ejecución, cuando se encuentra el bloque **if**, la variable **b** se declara y se inicializa con el valor **20**. Sin embargo **b** está limitada al ámbito del bloque **if** por lo que no puede ser accedida fuera de ese bloque

El uso de **let** tiene un ámbito de bloque más estricto, lo que va a ayudar a evitar errores y a mantener una mejor organización del código

## Const

Aunque **const** también está sujeto a hoisting, tiene algunas peculariedades importantes 

```javascript
console.log(c);  // Generaría un error, ya que c no está definida en este punto

if (true) {
  const c = 30;
  console.log(c);  // Imprime 30
}

console.log(c);  // Generaría un error, ya que c no está definida en este punto

```

### Fase de Declaración (Hoisting):

Durante la fase de declaración (hoisting), al igual que con let, la variable c no es izada al inicio del contexto de ejecución. Intentar acceder a c antes de su declaración genera un error.

### Fase de Ejecución:

En la fase de ejecución, cuando se encuentra el bloque if, la variable c se declara y se inicializa con el valor 30. Sin embargo, al igual que con let, c está limitada al ámbito del bloque if y no puede ser accedida fuera de ese bloque.

### Comportamiento Adicional con const:

const tiene una característica adicional en comparación con let y var: después de ser declarada e inicializada, no se puede volver a asignar a otro valor. Intentar reasignar un valor a una constante generará un error.

```javascript
const PI = 3.1416;
// PI = 3.14;  // Generaría un error, ya que PI no puede ser reasignada
```

Este comportamiento de **const** hace que se aútil para declarar constantes que no deben cambiar durante la ejecución del programa.

Aunque **const** esté sujeto a hoisting, su comportamiento está más relacionado con la inmutabilidad después de la inicialización que con el izado en si mismo.