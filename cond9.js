/* Solicitar al usuario dos números e indicar cual es el mayor o si son iguales.*/

let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingresar otro numero"));

if (num1 > num2){
    alert(num1 + " es mayor que " + num2);
} else if (num1 < num2){
    alert(num2 + " es mayor que " + num1);
} else if (num1 = num2){
    alert(num1 + " y " + num2 + " son iguales");
}