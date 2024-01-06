class Animal {
  //El constructor es un método especial que se ejecuta en el momento de instanciar la clase
  constructor(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
  }

  //Metodos
  sonar() {
    console.log("Hago sonidos porque estoy vivo");
  }

  saludar() {
    console.log(`Hola me llamo ${this.nombre}`);
  }
}

class Perro extends Animal {
  constructor(nombre, genero, tamanio) {
    //con el método 'super()' se llama el constructor de la clase padre
    super(nombre, genero);
    this.tamanio = tamanio;
  }

  sonar() {
    console.log("Soy un perro y ladro");
  }

  ladrar() {
    console.log("Guau!, Guau!");
  }
}

const mimi = new Animal("Mimi", "Hembra");
//scooby = new Animal("Scooby", "Macho");
scooby = new Perro("Scooby", "Macho", "Grande");

console.log(mimi);
mimi.saludar();
mimi.sonar();
console.log(scooby);
scooby.saludar();
scooby.sonar();
scooby.ladrar();
