## Isomorfismo

Capacidad de ejecutar el código tanto en el cliente como en el servidor. Se conoce como JavaScript Universal.

JavaScript es el único lenguaje capaz de ejecutarse en las tres capas de una aplicación

1. FrontEnd (JavaScript)
2. BackEnd (NodeJs)
3. Persistencia de datos (MongoDB, Couch DB, Firebase)

## Con JavaScript puedes

* Diseño y Desarrollo Web
* Hacer videojuegos
* Experiencias 3D, Realidad Aumentada, Realidad Virtual
* Controlar Hardware (Drones, robots, electrodomésticos) -> JonyFi
* Aplicaciones híbridas y Móviles -> Ionic, React Native
* Machine Learning -> TensorFlow

---
> **_IMPORTANT:_** JavaScript no es Java
---


### Características

* Lenguaje de Alto Nivel
* Interpretado
* Dinámico
* Debilmente tipado
* Multiparadigma
* Sensible a mayúsculas y minúsculas
* No necesita los puntos y comas al final de cada línea

### Escritura

* Los identificadores deben comenzar con:
    * Una letra
    * Un signo de dollar $
    * Un guión bajo _
    * Nunca con números o caracteres especiales

* Usa snake_case en:
    * Nombre de archivos
    ```javascript
    mi_archivo_javascript.js
    ```

* Usa UPPER_CASE en:
    * Constantes:
    ```javascript
    const UNA_CONSTANTE = "Soy una constante";
    ```

* Usa UpperCamelCase en:
    * Clases:
    ```javascript
    class SerHumano {
        constructor(nombre, genero) {
            this.nombre = nombre;
            this.genero =  genero;
        }
    miNombreEs() {
        return `Mi nombre es ${this.nombre}`
    }
    }
    ```

* Usa lowerCamenCase en:
    * Objetos:
    ```javascript
    const unObjeto = {
        nombre: "Juan";
        email: "juanmircha@gmail.com";
    }
    ```

    * Primitivos:
    ```javascript
    let unaCadena = "Hola Mundo",
    unNumero = 19,
    unBoolean = true;
    ```

    * Funciones:
    ```javascript
    function holaMundo(nombre) {
        alert('Hola mundo ${nombre}');
    }
    holaMundo("Jonathan");
    ```

    * Instancias:
    ```javascript
    const ajax = new XMLHttpRequest(),
    jon = new SerHumano("Jonathan", "Hombre");
    ```