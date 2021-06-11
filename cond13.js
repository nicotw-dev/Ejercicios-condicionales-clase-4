/* Solicitar al usuario un número de mes y devolver el nombre. (Ej: Ingreso 4 y me
devuelve “Abril”).*/

let mes = prompt("Ingrese un numero de mes (del 1 al 12)");

if (mes < 1 || mes > 12) {
    alert("Numero ingresado es incorrecto");
} else if (mes == 1){
    alert("Usted eligio el mes de ENERO");
} else if (mes == 2){
    alert("Usted eligio el mes de FEBRERO");
} else if (mes == 3){
    alert("Usted eligio el mes de MARZO");
} else if (mes == 4){
    alert("Usted eligio el mes de ABRIL");
} else if (mes == 5){
    alert("Usted eligio el mes de MAYO");
} else if (mes == 6){
    alert("Usted eligio el mes de JUNIO");
} else if (mes == 7){
    alert("Usted eligio el mes de JULIO");
} else if (mes == 8){
    alert("Usted eligio el mes de AGOSTO");
} else if (mes == 9){
    alert("Usted eligio el mes de SEPTIEMBRE");
} else if (mes == 10){
    alert("Usted eligio el mes de OCTUBRE");
} else if (mes == 11){
    alert("Usted eligio el mes de NOVIEMBRE");
} else if (mes == 12){
    alert("Usted eligio el mes de DICIEMBRE");
} else {
    alert("Error al ingresar un valor");
}
