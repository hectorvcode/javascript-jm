/**
 * Usar la siguiente url para documentación oficial
 * developer.mozilla.org/es/
 */

/**
 * Un objeto es una estructura de datos que permite almacenar y organizar datos de manera más compleja que un simple valor o una variable
 * van a tener propiedades y métodos
 * Las propiedades son características o datos asociados a un objeto. Pueden ser de cualquier tipo de dato
 * Los métodos son funciones asociadas a un objeto. Pueden realizar operaciones específicas en el objeto y pueden tener acceso a las propiedades del objeto
 */

let miObjeto = {
    propiedad1: "valor",
    propiedad2: 42,
    propiedad3: true,
    metodo1: function() {
        console.log("Este es un método");
    },
    metodo2() {
        console.log("Otra forma de escribir un método")
    }
}

console.log("Propiedad1", miObjeto.propiedad1); //Imprime valor
miObjeto.metodo1(); //Imprime "Este es un metodo"

