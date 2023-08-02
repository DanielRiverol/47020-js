//for(desde; hasta; actualizacion) i= i+1
/* for (let i = 0; i < 3;  i++) {
  alert("Ya llegamos al India?");
  alert("NO");
}

alert("A ver, YA!"); */
/* alert("Podeis hacerme 3 preguntas");
alert("Que bueno porque solo necesito una");
let respuesta = "";
for (let i = 0; i < 3; i++) {
  let pregunta = prompt("");
  if (pregunta != "usted?") {
    respuesta = "SI";
    alert(respuesta);
  } else {
    respuesta = "Así es... espero que los haya iluminado... ";
    alert(respuesta);
  }
}

alert("Gracias vuelva pronto"); */
/* let ingreso = parseInt(prompt("Ingresa un numero para multiplicar"));

if (isNaN(ingreso)) {
  alert("El valor ingresado no es un nuemro");
} else {
  for (let i = 0; i <= 10; i++) {
    let resultado = ingreso * i;
    console.log("El resultado de " + ingreso + " X " + i + " es " + resultado);
  }
} */

//Realizar un script que muestre si un número ingresado es primo es decir, solo se puede dividir por 1 y por sí mismo.

/* let ingreso = parseInt(prompt("Ingresa un numero para multiplicar"));
let esPrimo = true;

for (let i = 2; i < ingreso; i++) {
  if (ingreso % i === 0) {
    console.log("Además de dividir por 1 y por sí mismo, divide por ", i);
    esPrimo = false;
  }
}

if (esPrimo) {
  alert(ingreso + " es primo");
} else {
  alert(ingreso + " NO es primo");
} */

/* //Sentencia break
let secreto = "tarola";

for (let i = 1; i <= 3; i++) {
  let ingreso = prompt("Adivina la palabra ");
  if (ingreso === secreto) {
    alert("Adivinaste");
    break;
  } else {
    //les queda como ejercicio un mensaje al usuario si no adivina
  }
} */
//sentencia continue
//== evalua valores   === valores tipo de dato
/* for (let i = 0; i <= 50; i++) {
  if (i % 5 === 0) {
    console.log(i + " Es multiplo de 5");
    continue;
  }

  console.log(i);
} */

//while

/* let ingreso = prompt("Ya llegamos a la India?");

while (ingreso != "si") {
  //codigo a ejecutar

  //condicion de salida
  ingreso = prompt("Ya llegamos a la India?");
} */

let ingreso = prompt("Ingresa un producto. Para salir ingresa 0");
/* 
while (ingreso != "0") {
  console.log("Ingresate el producto " + ingreso);
  //condicion de salida
  ingreso = prompt("Ingresa otro producto. Para salir ingresa 0");
}
console.log("Fin del script"); */
console.log(ingreso != "0");
//do while
do {
  if (ingreso == "0") {
    console.log("Operacion cancelada");
  } else {
    console.log("Ingresate el producto " + ingreso);
    ingreso = prompt("Ingresa otro producto. Para salir ingresa 0");
  }
} while (ingreso != "0");
