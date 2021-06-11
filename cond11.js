/* Solicitar al usuario que ingrese 3 números e indicar cual es el mayor.*/

let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese un segundo numero"));
let num3 = parseInt(prompt("Ingrese un tercer numero"));

if (num1 > num2 && num1 > num3){
    alert("El numero " + num1 + " es el mayor de los numeros ingresados");
}else if (num2 > num1 && num2 > num3){
    alert("El numero " + num2 + " es el mayor de los numeros ingresados");
}else if (num3 > num1 && num3 > num2){
    alert("El numero " + num3 + " es el mayor de los numeros ingresados");
}