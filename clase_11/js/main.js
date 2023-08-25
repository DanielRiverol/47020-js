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
    contenedor.innerHTML = contenedor.innerHTML + html;
  }
}

btnSearch.addEventListener("click", (e) => {
  const filtrados = filtrarServicio(servicios, inputIngreso.value);
  crearHtml(filtrados);
});
//evento submit
const formulario = document.querySelector("#form-login");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);
  console.log(e.target[0].value);
  console.log(e.target[1].value);
  console.log("Formulario enviado");
});

//localStorage
localStorage.setItem("saludo", "Hola tarola");
localStorage.setItem("edad", 40);
localStorage.setItem("numeros", [1, 2, 3, 4, 5, 6, 7]);
localStorage.setItem("darkMode", true);

const saludo = localStorage.getItem("saludo");
const edad = localStorage.getItem("edad");
const mododOscuro = localStorage.getItem("darkMode") == "true";
const numerosGuardados = localStorage.getItem("numeros").split(",");
/* console.log(saludo);
console.log(edad);
console.log(mododOscuro);
console.log(numerosGuardados); */

sessionStorage.setItem("visitante", true);

const visitante = sessionStorage.getItem("visitante");
/* console.log(visitante); */

localStorage.removeItem("saludo");
//localStorage.clear()
const user = { nickname: "Fladers", pass: 12345678 };
/* console.log(user.nickname); */
const userJson = JSON.stringify(user);
localStorage.setItem("user", userJson);

const userDesdeStorage = JSON.parse(localStorage.getItem("user"));
/* console.log(userDesdeStorage.nickname); */
const carrito = [];

carrito.push(servicios[0]);
carrito.push(servicios[5]);
localStorage.setItem("carrito", JSON.stringify(carrito));

const btnMostrar = document.querySelector(".btn.btn-buscar");
const btnLimpiar = document.querySelector(".btn.btn-limpiar");

btnMostrar.addEventListener("click", () => {
  const arrServ = JSON.parse(localStorage.getItem("carrito"));
  console.log(arrServ);
  crearHtml(arrServ);
});
btnLimpiar.addEventListener("click", () => {
  localStorage.removeItem("carrito");
});
