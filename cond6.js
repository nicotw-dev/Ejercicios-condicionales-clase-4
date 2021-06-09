/* Solicitar al usuario que ingrese un monto. Si el monto es mayor a 2000 que aplique
un descuento del 10%. Mostrar el total a pagar.*/

let monto = parseInt(prompt("Ingresa un monto en $"));

if (monto > 2000){
    alert("Su total a pagar es de " + (monto - (monto * 0.1 )));
} else {
    alert("El total a pagar es de " + monto);
}