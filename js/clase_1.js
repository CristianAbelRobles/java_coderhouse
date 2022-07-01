// COMENTARIO EN UNA SOLA LINEA

/* 
VARIAS
LINEAS DE 
COMENTARIO
*/

let edad = 25;
let nombre = "Yael ";
let apellido = "Roufe"
const PI = 3.14;
let anioNacimiento = 1980;


anioNacimiento = 1990;

let miEdad = 2022 - anioNacimiento;   //33

let nombreCompleto = nombre + " " + apellido //Cristian Robles
let profesion = "medica"
// let miNombre = prompt("Cual es tu nombre?");

// PROMPT
 
// let profesion = prompt("cual es tu profesion?");

console.log("Este es un mensaje de consola");

console.log(miEdad);

// alert("Hola " + nombreCompleto + " Tu profesion es: " + profesion);

let cantidadManzanas = parseInt(prompt("Cuantas manzanas tenes?"));

let cantidadNaranjas = prompt("Cuantas naranjas tenes?");

console.log(cantidadManzanas + parseInt(cantidadNaranjas));

// para convertir en numero

// Number()
// parseInt()
// parseFloat()

console.log("Hola " + nombreCompleto + " Tu profesion es: " + profesion);

// string template
// `texto todo lo que quiero ${nombreCompleto}`
console.log(`Hola ${nombreCompleto} Tu profesion es: ${profesion}`);