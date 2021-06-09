/*5. Solicitar al usuario un número e indicar si es positivo, negativo o cero.*/

let num = parseInt(prompt("Ingresar un numero"));

if (num < 0) {
    alert("El numero " + num + " es negativo");
} else if (num == 0){
    alert("El numero es " + num);
} else {
    alert("El numero " + num + " es positivo");
}