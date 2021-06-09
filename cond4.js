/* Mejorar el ejercicio 1 de Variables: Solicitar al usuario dos números y mostrar por
consola el resultado de la suma de ambos. Informar al usuario si el número
resultante es par o impar.*/

let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Igrese otro numero"));
 
let total= num1 + num2



if (total % 2 == 1) {
    console.log(total + " Es un numero impar");
    
} else {
    console.log(total + " Es un numero par");
}
