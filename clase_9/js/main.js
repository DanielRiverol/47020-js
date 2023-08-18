const productos = [
  { id: 1, nombre: "arroz integral", precio: 89 },
  { id: 2, nombre: "papa", precio: 90 },
  { id: 3, nombre: "tomate", precio: 204 },
  { id: 4, nombre: "morrón", precio: 870 },
  { id: 5, nombre: "pan", precio: 240 },
  { id: 6, nombre: "fideos", precio: 124 },
  { id: 7, nombre: "fideos", precio: 160 },
  { id: 8, nombre: "arroz", precio: 500 },
  { id: 8, nombre: "arroz", precio: 500 },
  { id: 8, nombre: "arroz", precio: 500 },
  { id: 8, nombre: "arroz", precio: 500 },
];
const personas = [
  "Matias",
  "Pablo",
  "Maria",
  "Tobias",
  "Marcia",
  "Kevin",
  "Karen",
  "Federico",
  "Carolina",
  "Facundo",
  "Camila",
  "Stefi",
  "Augusto",
  "Jessica",
  "Carla",
  "Bautista",
];

/* Acceder a DOM  */
const titulo = document.getElementById("titulo");
//console.log(titulo);

const tituloSec = document.getElementById("secundario");

//console.log(tituloSec);

const lista = document.getElementsByClassName("lista");
//console.log(lista);

const paises = document.getElementsByClassName("pais");
//console.log(paises[0]);
/* console.log(paises[1]);
console.log(paises[2]);
console.log(paises[3]);
console.log(paises[4]);
console.log(paises[5]);
console.log(paises[6]); */

const div = document.getElementsByTagName("div");
//console.log(div);
const conten = document.getElementById("contenedor");
//console.log(conten);
//recorrer
for (const pais of paises) {
  //console.log(pais.innerText);
}
paises[5].innerText = "GERMANY";

//console.log(titulo.innerHTML="<span>HOLA</span>");
//console.log(tituloSec.innerHTML="HOLA TAROLA")

titulo.className = "card";

const parrafo = document.createElement("p");
parrafo.innerText = "Soy un parrafo creado en JS";
conten.appendChild(parrafo);

console.log(parrafo.innerText);
parrafo.remove();
//lista[0].remove()
//document.body.append(parrafo)
console.log(personas);

personas.push("Gabriela", "Roxana");
for (const persona of personas) {
  const li = document.createElement("li");

  li.innerText = persona;
  lista[1].appendChild(li);
}
//hacer con el array productos

let product = {
  id: 1,
  nombre: "Papas",
  precio: 450,
};

let concatenacion =
  "id: " +
  product.id +
  " Producto " +
  product.nombre +
  " Precio:$ " +
  product.precio;

let plantilla = `id: ${product.id} Producto: ${product.nombre} precio $ ${product.precio}`;//interpolación
console.log(plantilla);
console.log(concatenacion);

const div2 = document.createElement("div");
div2.innerHTML = `<div class="card">
<h3>${product.nombre}</h3>
<p>Precio $ ${product.precio}</p>
</div>`;

conten.appendChild(div2)
