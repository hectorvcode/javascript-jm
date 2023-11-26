## Escritura

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