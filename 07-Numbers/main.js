console.log("chapter numbers");

let a = 2;
let b = new Number(1);
let c = 7.19;


console.log(a, b);

//Cuantos números decimales va a tener un valor numérico
console.log(c.toFixed(1));
console.log(c.toFixed(5));

//Solo devuelve la parte entera
console.log(parseInt(c));

//Imprime la parte entera y la flotante
console.log(parseFloat(c));

let d = "5.6";

console.log(typeof c, typeof d);

console.log(a + b);

//Se realiza el proceso de contatenación, imprime: 7.195.6
console.log(c + d);

//Haciendo un cast: imprime 12.19.0000000001
//Se recomienda usar bibliotecas para el manejo de cálculos

console.log(c + parseInt(d));


//Imprime 12.79
console.log(c + parseFloat(d));

//Por esta razón este metodo se aplica diferente, depende del constructor
console.log(c + Number.parseInt(d));
console.log(c + Number.parseFloat(d));

