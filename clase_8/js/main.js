const tickets3D = [
  { id: 1, pelicula: "Ant-man Quantunmania", precio: 2400 },
  { id: 2, pelicula: "Super Mario Bros, la película", precio: 2300 },
  { id: 3, pelicula: "John Wick 4", precio: 2600 },
  { id: 4, pelicula: "The Wale", precio: 2200 },
  { id: 5, pelicula: "Shazam, la furia de los dioses", precio: 2575 },
  { id: 6, pelicula: "Creed 3", precio: 2389 },
  { id: 7, pelicula: "Barbie", precio: 2800 },
];

//Funciones de orden superior
//console.log(tickets3D);
tickets3D.forEach((pelicula) => {
  //console.log(pelicula);
});

//find
function buscarPelicula(arr, titulo) {
  return arr.find((el) => el.pelicula.includes(titulo));
}
function fitrarPelicula(arr, titulo) {
  return arr.filter((el) => el.pelicula.includes(titulo));
}
const encontrada = buscarPelicula(tickets3D, "a");
const filtradas = fitrarPelicula(tickets3D, "la");
//console.log(encontrada);
//console.log(filtradas);

//Math
//console.log(Math);
/* console.log(Math.PI);
console.log(Math.SQRT2);
console.log(Math.min(1,5,3,0,-1,-796));
console.log(Math.max(1,5,3,0,-1,-796,45));

console.log(Math.ceil(Math.PI));
console.log(Math.round(Math.PI));
console.log(Math.round(3.5));
console.log(Math.round(3.4));
console.log(Math.floor(3.99)); */
//console.log(Math.sqrt(-3));

function asignarOperacion(op) {
  switch (op) {
    case "+":
      return (a, b) => a + b;

    case "-":
      return (a, b) => a - b;

    case "*":
      return (a, b) => a * b;

    case "/":
      return (a, b) => {
        if (b == 0) {
          return "Error";
        } else {
          return a / b;
        }
      };
    case "pot":
      return (a, b) => Math.pow(a, b);

    default:
      return () => "El operador no es válido";
  }
}

let potencia = asignarOperacion("pot");
/* 
  console.log(potencia(2,3));
  console.log(potencia(4,3)); */
let random = Math.random() * 100;

let redondeo = Math.floor(random);
//console.log(random);
//console.log(redondeo);

const hexa = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
let color = "";
for (let i = 0; i < 6; i++) {
  let aleatorio = Math.floor(Math.random() * hexa.length);
  color = color + hexa[aleatorio];
}
//console.log("#"+color);

function createToken() {
  const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let token = "";

  for (let i = 0; i < 6; i++) {
    const random = Math.floor(Math.random() * numeros.length);
    token = token + numeros[random];
  }
  return token;
}

//console.log(createToken());

const fecha = new Date();
/* console.log(fecha);
console.log(new Date(2020,11,3));
console.log(new Date("December 25, 2023 23:59:59 ")); */
/* 
console.log(fecha.getFullYear());
console.log(fecha.getMonth()+1);
console.log(fecha.getDate());
console.log(fecha.getDay());

console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());

console.log(fecha.getTime()); */

function calcularEstadia(ingreso, egreso) {
  let fIngreso = new Date(ingreso).getTime();
  let fEgreso = new Date(egreso).getTime();
  //validar las fechas
  let totalDias = (fEgreso - fIngreso) / 86400000;//1d en ms
  return totalDias;
}

let fechaIngreso = prompt("Ingresa la fecha de ingreso al Hotel", "2023-01-01");
let fechaEgreso = prompt("Ingresa la fecha de egreso al Hotel", "2023-01-01");

console.log(calcularEstadia(fechaIngreso, fechaEgreso));
