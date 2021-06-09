/* Contexto: Una heladería. Solicitar al usuario sus sabores en un solo input.
Luego preguntar si quiere cobertura de chocolate. Si dice Sí, mostrar el valor
del helado 180 con el pedido completo: “Su helado sabor …. con cobertura
de chocolate cuesta $180”. En caso de que no la requiera, será lo mismo
pero sin cobertura de chocolate y el valor es de $150.*/

alert("Bienvenido a la heladeria");

let sabores = prompt("Elige 3 sabores");
let cobertura = prompt("¿Desea incluir cobertura de chocolate? ($30 adicional)")

if (cobertura == "si"){
    alert("Su helado sabor: " + sabores + " con cobertura de chocolate cuesta $180");
} else if (cobertura == "no")  {
    alert("Su helado sabor: " + sabores + " sin cobertura de chocolate cuesta $150");
}