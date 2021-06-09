/* Solicitar al usuario que ingrese una cadena de texto y luego un una posición. Indicar
si el dígito de esa posición es vocal o no lo es. (Puede ser consonante, espacio,
comilla, etc.)*/

let text = prompt("Ingresar un texto pequeño");


let vocal = text.charAt(3);



const vocales = ["a", "e", "i", "o", "u"];


if (vocales.indexOf(vocal) === -1){
    alert("No es vocal");
} else {
    alert("Es una vocal");
}

