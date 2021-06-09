/* 2. Solicitar al usuario su edad. Si es menor de 18, decir que es menor de edad,
sino decir que es mayor .*/

let edad = parseInt(prompt("Ingrese su edad"));

if (edad < 18){
    alert("Usted es menor de edad");
} else if (isNaN (edad)){
    alert("El dato ingresado no es valido");
} else {
    alert("Usted es mayor de edad");
}
  
