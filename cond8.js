/* Solicitar al usuario que ingrese una nota del 1 al 10. Si está entre 1 y 3 responder:
Aplazado, si está entre 4 y 5 responder: Reprobado , y 6 o más aprobado.*/

let nota = parseInt(prompt("Ingrese la nota del examen (Del 1 al 10)"));

if (nota >= 1 && nota <= 3){
    alert("Alumno aplazado");
}else if (nota >= 4 && nota <= 5){
    alert("Alumno reprobado");
} else if (nota >= 6 && nota <= 10){
    alert("Alumno aprobado");
} else if (isNaN(nota) || nota >10){
    alert("Dato ingresado incorrecto");
}