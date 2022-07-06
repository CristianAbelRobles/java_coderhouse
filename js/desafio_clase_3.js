let respuesta = prompt("Tiene cinco intentos para resolver esta adivinanza. Canta cuando amanece y vuelve a cantar cuando el día desaparece. ¿Quién soy?");
let i = 4;

if (respuesta == "gallo"){
    alert(`Felicitaciones, acertaste! la respuesta correcta es gallo`);
} else {
    while((respuesta != "gallo")) {
        alert(`Respuesta incorrecta! Te quedan ${i} intentos.`);
        i--;
        respuesta = prompt("Canta cuando amanece y vuelve a cantar cuando el día desaparece. ¿Quién soy?");
        if(i == 0) {
            alert("Te quedaste sin intentos");
            alert(`Puede volver a intentarlo cuando quiera, adios!`);
            break;
        }
    }
}



