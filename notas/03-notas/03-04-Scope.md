## Scope o Ambito

El término scope en JS se refiere al contexto en el cual las variables y funciones son accesibles y pueden ser utilizadas. El ámbito determina la visibilidad y el tiempo de vida de las variables y funciones en tu código

### Ambito Global

Es el ámbito de nivel superior en tu código y está asociado con todo el documento o la aplicación. Las variables y funcione declaradas fuera de cualquier función o bloque de código están en el ámbito global y pueden ser accesibles desde cualquier lugar en tu programa.

```javascript
// Variable global
var globalVar = "Soy global";

function mostrarGlobalVar() {
  console.log(globalVar);
}

mostrarGlobalVar();  // Imprime "Soy global"
```

En el anterior ejemplo **globalVar** es una variable global porque se declara fuera de cualquier función. 

Puede ser accedida tanto dentro como fuera de la función **mostrarGlobalVar**

### Ambito Local

El ambito local se refiere a las variables y funciones que están limitadas a un bloque de código o a una función específica. Las variables declaradas dentro de una función o bloque de código son solo accesibles dentro de ese ámbito local

```javascript
function ejemploLocalScope() {
    //Variable local
    var localVar = "Soy local";
    console.log(localVar);
}

console.log(localVar); //Generaria un eror ya que localVar no está defiinida aqui

ejemploLocalScope(); //Imprime "Soy local"
```

En este caso localVar es una variable local porque está declarada dentro de la función ejemploLocalScope. No puede ser accedida fuera de esa función

### Ambito de Bloque (let y const)

Con la introducción de let y const en ECMAScript 6 (ES6), se introdujo el concepto de ámbito de bloque. Las variables declaradas con let y const tienen un ambito de bloque, lo que significa que su visibilidad se limita el bloque de código en el que están definidas.

```javascript
if (true) {
  // Variable con ámbito de bloque
  let blockVar = "Soy de este bloque";
  const PI = 3.1416;

  console.log(blockVar);  // Imprime "Soy de este bloque"
}

console.log(blockVar);  // Generaría un error, ya que blockVar no está definida aquí
console.log(PI);  // Generaría un error, ya que PI no está definida aquí

```
las variables blockVar y PI solo son accesibles dentro del bloque if

### Ambito Lexical

También conocido como ámbito estático. Significa que el ámbito de una variable se determina en tiempo de compilación basándose en la posición física de la declaración en el código y no en la forma en que se ejecuta el programa. Esto es relevante cuando se trabaja con funciones anidadas

```javascript
function externa() {
  // Variable en el ámbito de la función externa
  var externaVar = "Variable externa";

  // Función interna anidada
  function interna() {
    // Accede a la variable externaVar desde el ámbito léxico de la función externa
    console.log(externaVar);
  }

  // Llama a la función interna
  interna();
}

// Llama a la función externa
externa();  // Imprime "Variable externa"
```

Paso a paso
* Se declara la función *externa*
* Dentro de *externa*, se declara la varialbe *externaVar*
* Se declara la función *interna* dentro de *externa*
* Dentro de *interna* se utiliza *console.log(externaVar)* para imprimir el valor de *externaVar*
* Se llama a la función *interna* desde *externa*
* Al llamar a *externa*, se ejecutan ambas funciones y se imprime *Variable externa* en la consola