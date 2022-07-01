//FOR(DESDE; HASTA; ACTUALIZACION) {sentencias}

// for(let i = 10; i > 0; i--) {
//     console.log(i);
// }

// let numeroIngresado = parseInt(prompt("Ingresa un numero"));
// let numeroRepeticiones = parseInt(prompt("Cuantas veces queres repetir?"));

// for(let i = 1; i <= numeroRepeticiones; i++) {
//     let resultado = numeroIngresado * i;

//     if(resultado == 54) {
//         break;
//     }
//     if(resultado == 12) {
//         continue;
//     }

//     console.log(`el numero ${numeroIngresado} X ${i} = ${resultado}`);
// }


// validacion de contrasena

// let password = 1234;

// let dato = parseInt(prompt("Cual es la contrasena"));

// let intentos = 3;

// while((dato != password)) {
//     intentos--;
//     alert("Contrasena equivocada! Te quedan " + intentos );
//     dato = parseInt(prompt("Cual es la contrasena"));
//     if(intentos == 0) {
//         alert("Te quedaste sin intentos");
//         break;
//     }
// }


//el resto de mi aplicacion


let animal = prompt("Que animal te gusta?");

switch(animal) {
    case "gato":
        //codigo
        alert("el gato hace miau");
    case "perro":
        alert("el perro hace guau");
        break;
    case "vaca":
        alert("la vaca hace mu");
        break;
    default:
        alert("No se como hace el " + animal );
        break;
}