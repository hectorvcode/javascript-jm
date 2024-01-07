console.log(Date());

let fecha = new Date();

console.log(fecha);

//Dia del mes
console.log(fecha.getDate());

//Dia de la semana D-L-M-Mi-J-V-S -> 0-1-2-3-4-5-6
console.log(fecha.getDay());

//Mes Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic -> 0 1 2 3 4 5 6 7 8 9 10 11
console.log(fecha.getMonth());

//Año
console.log(fecha.getFullYear());

console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());
console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());

//Cuantos segundos han pasado desde el 01 de enero de 1970 - Fecha timestamp
console.log(Date.now());

//moment.js - librería para manejo de fechas

let cumpleHector = new Date(1980, 0, 23);
console.log(cumpleHector);
