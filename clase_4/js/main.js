//switch
/* let ingreso = prompt(
  "Selecciona una bebida \n 1-Cafe \n 2- Te \n 3- Agua caliente"
);

switch (ingreso) {
  case "1":
    alert("Seleccionaste Cafe");
    break;
  case "2":
    alert("Seleccionaste Te");
    break;
  case "3":
    alert("Seleccionaste Agua caliente");
    break;

  default:
    alert("Opcion no valida");
    break;
} */

//declaracion de una funcion
function saludar() {
  console.log("Hola tarola");
}

//invocar o llamar
/* for (let i = 0; i < 5; i++) {
  saludar();
} */
function saludoPersonalizado(nombre) {
  alert("Hola " + nombre);
}

/* saludoPersonalizado("Felipe")
saludoPersonalizado("Luis")
saludoPersonalizado("Pamela")
saludoPersonalizado("Nico")


for (let i = 0; i < 3; i++) {
let ingreso  = prompt('Ingresa tu nombre para que te salude')

  saludoPersonalizado(ingreso)
  
}
 */
/* let numero1 = parseInt(prompt("Ingresa un numero"));
let numero2 = parseInt(prompt("Ingresa un numero")); */
/* 
const PI = 3.141516;
function suma(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
     return "No son numeros"
  } else {
    return num1 + num2
  }
}

function mensaje(mensaje) {
  console.log(mensaje);
}

let resultado = suma(numero1, numero2)
mensaje(resultado) */

function calcular(num1, num2, operacion) {
  switch (operacion) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2; //validar que num2 no sea 0

    default:
      return "opcion no valida";
  }
}

/* let resSuma= calcular(2,3,"+")
let resSuma2= calcular(numero1,numero2,"+")
let resResta= calcular(resSuma,numero2,"-")
console.log(resSuma);
console.log(resSuma2);
console.log(resResta); */
//Scope o ambito de una variable
let resultado = 99;//variable global

for (let i = 0; i < 5; i++) {
  let resultado = 0;//variable local
  resultado = resultado + i;
  console.log(resultado); 
  console.log("Este es el valor de i "+ i);
}

if(resultado < 100){
  
  console.log(" menor a 100");
}
console.log(resultado);
