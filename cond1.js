/* 1. Agregar al ejercicio 5 de Variables un validador de datos. Si ingresa un
número entonces que me calcule las medidas, sino, que muestre un mensaje
de error.*/



let metro = parseFloat(prompt("Ingrese una medida en metros"));

let pies = 3.28084
let cm = 100
let pulg = 39.3701

if (isNaN (metro)){
    console.log("Error al realizar la conversion")
} else {
    console.log((pies * metro).toFixed(2) + " pies");
    console.log(cm * metro + " centimetros");
    console.log((pulg * metro).toFixed(2) + " pulgadas");

}

