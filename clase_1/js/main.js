//Comentario en un a sola linea
/* Comentario
mutilinea */
/* declaracion de variable */
var nombre; /* ES5 */
var nombre = "JUAN";
//console.log(nombre);
/* Asignacion */
nombre = "Daniel";

let edad = 40; /* ES6 */

/* reasigacion de valores */
edad = "50";

let apellido = "Juarez";
let numero;
numero = 33;
numero = 34;

const PI = 3.141516;
const DNI = 1234567;
//PI= "Numero PI" No se puede hacer
let nombreCompleto = nombre + " " + apellido; //Concatenando variables
let resultado = PI + 4.21;
//console.log(resultado);

resultado = PI / 3;
//console.log(resultado);

resultado = 3 * PI - 3;
//console.log(resultado);

resultado = PI + numero;
//console.log(resultado);

/* metodo de salida */
/* console.log(apellido);
 console.log(nombre);
 console.log(nombreCompleto); */
console.log("El valor de resultado es " + resultado);
console.log(numero + "10");
/* 
alert("Hola Tarola");
alert("El valor de resultado es " + resultado); */

/* metodo de entrada */
/* let usuario=prompt("Ingresa tu nombre de usuario");

alert("Bienvenido/a " + usuario); */

let num1= prompt("Ingresa un numero");
num1= parseFloat(num1);
let num2= parseFloat(prompt("Ingresa otro numero"));
console.log(num1);
console.log(num2);
let resultado2= num1 + num2;
alert(resultado2);