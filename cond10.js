/* Solicitar al usuario que indique un mes (del 1 al 12) e indicar si tiene 30 días, 31 días
o 28/29 días.*/

let mes = prompt("Ingresar un mes con su posiicon en numero (del 1 al 12), ejemplo: Enero = 1.");

/* enero 31, febrero 28/29, marzo 31, abril 30, mayo 31, junio 30, julio 31, agosto 31, septiembre 30,
octubre 31, noviembre 30, diciembre 31*/

/*const treintauno = ["1", "3", "5", "7", "8", "10", "12"];

const treinta = ["4", "6", "9", "11"];*/


if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
    alert("El " + mes + "º mes del año tiene 31 dias." );
} else if (mes == 4 || mes == 6 || mes == 9 || mes == 11){
    alert("El " + mes + "º mes del año tiene 30 dias." );
} else if (mes == 2){
    alert("El " + mes + "º mes del año tiene 28/29 dias." );    
}
