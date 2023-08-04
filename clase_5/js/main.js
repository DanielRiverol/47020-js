/* function calcularAreaCirculo(circunferencia) {
  if (circunferencia <= 0) {
    return "La circunferencia debe ser un número positivo mayor que cero.";
  }
  const pi = 3.14159;//varibles locales
  const radio = circunferencia / (2 * pi);
  const area = pi * (radio * radio);
  return area;
}
function mostrar(mensaje) {
  alert(mensaje);
}
let circulo1 = parseFloat(prompt("Ingresa la circuferencia del círculo"));
const areaCirculo = calcularAreaCirculo(circulo1);
mostrar("Resultado:")
mostrar(areaCirculo); */

//funcion anonima
/* const calcularAreaCirculo = function (circunferencia){
  if (circunferencia <= 0) {
    return "La circunferencia debe ser un número positivo mayor que cero.";
  }
  const pi = 3.14159;//varibles locales
  const radio = circunferencia / (2 * pi);
  const area = pi * (radio * radio);
  return area;
}
 */

//arrow function ()=>{}
/* const calcularAreaCirculo= (circunferencia)=>{
  if (circunferencia <= 0) {
    return "La circunferencia debe ser un número positivo mayor que cero.";
  }
  const pi = 3.14159;//varibles locales
  const radio = circunferencia / (2 * pi);
  const area = pi * (radio * radio);
  return area;
}

function mostrar(mensaje) {
  alert(mensaje);
}

const circulo1 = parseFloat(prompt("Ingresa la circuferencia del círculo"));
const areaCirculo = calcularAreaCirculo(circulo1);
mostrar("Resultado:")
mostrar(areaCirculo); 
 */
//objeto literal
/* const personaje = {
  nombre: "Juanito",
  apellido: "Arcoiris",
  telefono: "098765567",
};

console.log(personaje["nombre"]);
console.log(personaje["apellido"]);
console.log(personaje["telefono"]);

const personaje1 = {
  nombre: "Homero",
  apellido: "Simpson",
  telefono: "098765678",
  direccion: "Av Siempreviva 742",
};
console.log(personaje1["nombre"]);
console.log(personaje1["apellido"]);
console.log(personaje1["telefono"]);
console.log(personaje1["direccion"]);
const personaje2 = {
  nombre: "Bart",
  apellido: "Simpson",
  telefono: "12345612",
  direccion: "Av Siempreviva 742",
};
console.log(personaje2.nombre);
console.log(personaje2.apellido);
console.log(personaje2.telefono);
console.log(personaje2.direccion);

personaje.nombre = "Cameron";
personaje.direccion = "Hola tarola 1234";

console.log(personaje.nombre);
console.log(personaje.direccion);
console.log(personaje);
  */

// funcion constructora

function Libro(titulo, autor, precio, stock = 0) {
  this.titulo = titulo;
  this.autor = autor;
  this.precio = parseFloat(precio);
  this.stock = stock;

this.vender = function (cant){
 // console.log(this.titulo + " vendido");
 if(cant > this.stock)//seguilo vos
 //validar el stock
return this.precio * cant
}

}

const libro1 = new Libro(
  "Harry Poteer y la piedra filosofal",
  " J.K Rowling",
  1230,
  3
);

console.log(libro1);
console.log(libro1.titulo);
console.log(libro1.autor);


const libro2 = new Libro("IT", "Stephen King", 12000, undefined);
/* console.log(libro2);
console.log(libro2.titulo);
console.log(libro2.autor);
console.log(libro2.stock); */
console.log(libro1.vender(2))
libro2.vender()

//metodos
const mensaje = "Javascript Rules";
/* 
console.log(mensaje.length);
console.log(mensaje.toLowerCase());
console.log(mensaje.toUpperCase()); */

