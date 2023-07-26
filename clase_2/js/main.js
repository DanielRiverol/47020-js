/* let num1 = prompt("Ingresa un número");
num1 = parseFloat(num1);
let num2 = parseFloat(prompt("Ingresa otro número"));
console.log(num1);
console.log(num2);
let resultado2 = num1 + num2;

console.log(
  "El resultado de la suma entre " + num1 + " y " + num2 + " es: " + resultado2
); */

let nombre;
nombre = "Dani";
const GRAVEDAD = 9.8;
nombre = "Matias";

//si(condicion)entonces ejecucion
/* if(true){
    console.log("Vas a ver este mensaje");
} */

let temperatura = 30;

/* 
if(temperatura < 30){
    //codigo a ejecutar
    console.log("Esta agradable");
}else{
    console.log("Que calor!!!!");
}

console.log("Resto del codigo"); */

/* let usuario= prompt("INgresa tu usuario"); */
//= asiganacion  == comparacion != distinto
/* if(usuario != ""){
    console.log("Bienvenido/a " + usuario);
}else{
    console.log("No ingresate tu usuario");
    
} */

/* let num = parseFloat(prompt("Ingresa tu edad"));
//variables booleanas
 let mayorEdad=num > 18;
console.log(mayorEdad);
if(mayorEdad){
    console.log('Bienvennido al casino BURNS');
}else{
    console.log('No podes ingresar al casino');
} */


//if concatenados if elseif else
/* let precio = 180;
if(precio < 100){
    console.log("Precio menor a 100");
}else if(precio <= 220){
    console.log("Precio menor o igual a 220");
}else if(precio <= 180){
    console.log("Precio menor o igual a 180");
}else{
    console.log("Precio es " + precio);
} */


//operadores logicos condicion1 && condicion2 v && v = v / f && v = F v && f = F
//OR devuelve true cuando una de las condiciones es true
/* let userSaved= "Juanito"
let passwordSaved= "Arcoiris"
let ingresoUsuario= prompt("Ingresa tu usuario")
let ingresoPassword= prompt("Ingresa tu password")
let nombreUser=(userSaved == ingresoUsuario || ingresoUsuario == "Cameron");//true o false

if(nombreUser && passwordSaved== ingresoPassword){
//mensaje1 
console.log('Bienvenido usuario');
}else{
//mensaje2
console.log("Vuelva a intentar");
} */

let edadObligatoria=18, edadOptativa= 16, edadLimite= 69;
let edadUsuario= parseInt(prompt('Ingresá tu edad'));

if(edadUsuario >= edadObligatoria && edadUsuario <= edadLimite){
    alert('Estas obligado a votar');
}else if(edadUsuario >=edadOptativa || edadUsuario >edadLimite){
    alert('Podes ir a votar si queres');
}else{
    alert('No podes votar todavia');
}//infraccion
