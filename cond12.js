/* Solicitar al usuario que ingrese su edad y una bebida. (Entre: Cerveza, jugo, agua).
Si pide alcohol y es menor de edad que le salte un alerta indicando que no puede
realizar la compra. Indicar el costo y solicitar al usuario que indique con cuanto va a
pagar e indicar cuánto sería su vuelto.
(Ej: La cerveza cuesta $50 y paga con 100, se le debe devolver $50. Si indica que
paga con menos de lo que cuesta el producto, indicar un error).*/

let edad = parseInt(prompt("Ingrese su edad"));
let bebida = prompt("Que desea ordenar? Cerveza, Agua, Jugo.");

const cerveza = 130
const agua = 60
const jugo = 90

if (bebida === "cerveza" && edad < 18) {
    alert("No puede realizar la compra ya que es menor de edad");
} else {
    if (bebida === "cerveza") {
        alert("La cerveza cuesta $" + cerveza);
    } else if (bebida === "agua") {
        alert("El agua cuesta $" + agua);
    } else if (bebida === "jugo") {
        alert("El jugo cuesta $" + jugo);
    }

let dinero = parseInt(prompt("Con cuanto dinero desea pagar?"));
let vuelto = "";

switch(bebida) {
    case "cerveza":
        if (dinero < cerveza) {
            alert("No tiene dinero suficiente para pagar la cerveza");
        } else {
            vuelto = dinero - cerveza
            alert("Gracias por su compra. Su vuelto es de " + vuelto);
        }
        break;

    case "agua": 
        if (dinero < jugo) {
            alert("No tiene dinero suficiente para pagar el agua");
        } else {
            vuelto = dinero - agua
            alert("Gracias por su compra. Su vuelto es de " + vuelto);
        }
        break;

    case "jugo":
        if (dinero < jugo) {
            alert("No tiene dinero suficiente para pagar el jugo");
        } else {
            vuelto = dinero - jugo
            alert("Gracias por su compra. Su vuelto es de " + vuelto)
        }
        break;
}
}
