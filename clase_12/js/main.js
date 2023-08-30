const btnSearch = document.querySelector("#btnSearch"),
  inputIngreso = document.querySelector("#ingreso");
const contenedor = document.querySelector("#contenedor");

const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1200, img: "esculpidas.webp" },
  { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpeg" },
  { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
  {
    id: 8,
    nombre: "radiofrecuencia",
    precio: 12800,
    img: "radiofrecuencia.png",
  },
  {
    id: 9,
    nombre: "micropigmentación",
    precio: 7800,
    img: "micropigmentacion.jpeg",
  },
];

//Funciones de búsqueda
function buscarServicio(arr, filtro) {
  const encontrado = arr.find((el) => {
    return el.nombre.includes(filtro);
  });
  return encontrado;
}
function filtrarServicio(arr, filtro) {
  const filtrado = arr.filter((el) => {
    return el.nombre.includes(filtro);
  });
  return filtrado;
}
function crearHtml(arr) {
  contenedor.innerHTML = "";
  let html;
  for (const el of arr) {
    html = `<div class="card">
                <img src=" ./img/${el.img}" alt="${el.nombre}">
                <hr>
                <h3>${el.nombre}</h3>
                <p>Precio: $${el.precio} </p>
                  <div class="card-action">
                    <button class="btn btn-delete" id="${el.id}">Quitar</button>
                  </div>
              </div>`;
    //se la agrego al contenedor
    //contenedor.innerHTML = contenedor.innerHTML + html;
    contenedor.innerHTML += html;
  }
}

btnSearch.addEventListener("click", (e) => {
  const filtrados = filtrarServicio(servicios, inputIngreso.value);
  crearHtml(filtrados);
});

const user = { nickname: "Fladers", pass: 12345678 };
/* console.log(user); */
/* const userJson = JSON.stringify(user);
localStorage.setItem("user", userJson);

const userDesdeStorage = JSON.parse(localStorage.getItem("user")); */
/* console.log(userDesdeStorage); */

const inputUser = document.querySelector("#user"),
  inputPass = document.querySelector("#pass"),
  check = document.querySelector("#check"),
  formulario = document.querySelector("#form-login"),
  message = document.querySelector("#message");

function guardar(valor) {
  const user = { usuario: inputUser.value, pass: inputPass.value };
  //validar que los campos no esten vacios
  /* if (valor === "localStorage") {
    localStorage.setItem("user", JSON.stringify(user));
  } */
  /*  if (valor === "sessionStorage") {
    sessionStorage.setItem("user", JSON.stringify(user));
  } */
  valor === "localStorage" &&
    localStorage.setItem("user", JSON.stringify(user));
  valor === "sessionStorage" &&
    sessionStorage.setItem("user", JSON.stringify(user));
}

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  /*  if (check.checked) {
    guardar("localStorage");
  } else {
    guardar("sessionStorage");
  } */
  check.checked ? guardar("localStorage") : guardar("sessionStorage");
});

//Operador ternario | condicion ? true : false
let temp = 31;
/* if (temp > 30) {
  console.log("Dia caluroso");
} else {
  console.log("Dia agradable");
} */
//temp > 30 ? console.log("Dia caluroso") : console.log("Dia agradable");

const persona = { nombre: "Juanito", edad: 15 };

/* let permiso;
if (persona.edad >= 18) {
  permiso = true;
} else {
  permiso = false;
} */
let permiso = persona.edad >= 18 ? true : false;
//console.log(permiso);

//AND && simplifica un if tradicional !true && !ejecuta
const carrito = [1];
if (carrito.length === 0) {
  console.log("Carrito Vacio");
}
carrito.length === 0 && console.log("Carrito vacio");
localStorage.setItem("carrito", JSON.stringify([1, 2, 3, 4, 5]));
localStorage.removeItem("carrito");
const carrito1 = JSON.parse(localStorage.getItem("carrito")) || []; //null

//console.log(carrito1);

const personaje = {
  nombre: "Bart",
  edad: 10,
  calle: "Av. Siempreviva 742",
  padre: { nombre: "Homero", edad: 38 },
};
let personaje2 = null;
//OPerador or ||
//console.log(personaje || "el personaje no existe");
//console.log(personaje2 || "el personaje no existe");

console.log(personaje2?.nombre);
console.log(personaje?.nombre);

//destructuring
/* const nombre= personaje.nombre
console.log(nombre);
const edad= personaje.edad
console.log(edad); */

const {nombre, edad, calle,padre}=personaje
console.log(nombre);
console.log(edad);
console.log(calle);
console.log(padre);
const {nombre:nombreP, edad:edadP}=padre//alias
console.log(nombreP);
console.log(edadP);
console.log(personaje.padre.nombre);