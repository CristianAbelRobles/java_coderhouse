
// if(CONDICION) {
//     sentencias
// }

// let precio = 10;

// let pago = parseFloat(prompt("Con cuanto me pagas?"));

// let pagoSuficiente = (pago > precio);

// if(pagoSuficiente) {
//     let vuelto = pago - precio;
//     console.log("Me pagaste de mas, te tengo que devolver " + vuelto)
// }

// let deporteFavorito = prompt("cual es tu deporte favorito?");

// if(deporteFavorito == "voley") {
//     alert("El mio tambien!");
// } else if (deporteFavorito == "futbol") {
//        alert(`tu deporte es ${deporteFavorito}. El mio es voley`);
// } else {
//     alert(`el deporte que elegiste es el ${deporteFavorito}`)
// }

// let edad = parseInt(prompt("Cual es tu edad?"));

// let esMayorEdad = (edad > 18); //true (20)...... false (15)

// console.log(esMayorEdad);

// if (esMayorEdad == false) {
//     alert("No le compres cerveza");
// } else {
//     alert("es mayor, podes comprar");
// }


// let num1 = 1;

// let numUno = "1";


// let sonIguales = (num1 === numUno); //false

// console.log(sonIguales); // false

// console.log(!sonIguales); // true

// Si es abogado - que pague mas

/*
if(!abogado) {
    valor normal
}
 
*/

// let nombreIngresado   = prompt("Ingresar nombre");

// if((nombreIngresado !="") && ((nombreIngresado == "EMA") || (nombreIngresado =="ema"))){
//     alert("Hola Ema"); 
// }else{
//     alert("Error: Ingresar nombre valido");
// }


// preguntarle al usuario su edad
// Si tiene entre 0 y 17 - " Eres un ninio"
// si tiene entre 18 y 40 - " sos un joven"
// y si tiene mas de 40 - "Trajiste tu baston?"


// let edad = parseInt(prompt("Cual es tu edad?"));

// if (edad<=17){
//     alert(`Eres un niño.`)
// }else if (edad<=40){
//     alert(`Sos un joven.`)
// }else {
//     alert(`Trajiste tu baston?.`)
// }

// //Preguntarle al usuario su edad
// let edad = Number(prompt("Cual es tu edad?"))
// //Si tiene entre 0 y 17 - "Eres un ninio"
// if(edad > 0 && edad < 17){
//     alert("Eres un ninio")
// }else if( edad > 18 && edad < 40){
//     //Si tiene entre 18 y 40 - "Sos un joven"
//     alert("Sos un joven")
// }else if (edad > 40){
//     // Si tiene mas de 40 - "Trajiste tu baston?"
//     alert("Trajiste baston?")
// }

// let edad = parseFloat(prompt("que edad tienes??"));

// if((edad >= 0) && (edad <= 17)){
//     console.log("Eres un niño");
// } else if ((edad >= 18) && (edad <= 40)){
//     console.log("Eres un joven");
// } else if(edad > 40){
//     console.log("Eres una persona mayor");
// } else {
//     console.log("esa no es una edad valida")
// }

// let edad = prompt("Cual es tu edad?")

// if (edad <= 17){
//     alert("Eres un ninio")
// } else if (edad<40){
//     alert(`Sos un joven.`)
// }else {
//     alert(`Trajiste tu baston?.`)
// }

// let edad = parseFloat(prompt("Ingrese su edad"));

// if (edad < 18){
//     alert("Eres un ninio");
// }else if ((edad > 18) && (edad < 40)){
//     alert("Eres un joven");
// }else {
//     alert("Trajiste tu baston?");
// }


// let edadUsuario = parseInt(prompt("¿Cual es tu edad?"));

// if(edadUsuario <= 17) {
//     alert("Eres un niño");
// }

// else if(edadUsuario <= 40) {
//     alert("Sos un joven");
// }

// else {
//     alert("Trajiste tu baston?");
// };


// let edad= parseInt( prompt("Indica tu edad"));

// if ((edad>= 0) && (edad<=17)) {
//     alert ("Eres un nene");
// }
// else if ((edad> 17) && (edad<=40)) {
//     alert ("Sos joven");
// }

// else if ((edad> 40)) {
//     alert ("Trae el baston");
// }

// else {
//     alert("Ingresa un numero");
// }


// pedirle al usuario un numero
// evaluar si el numero es par o no