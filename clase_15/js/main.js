document.title = "Clase 15 | Comisión 47020";
const titulo = document.querySelector("h1 span"),
  tituloSecundario = document.querySelector("h2"),
  card = document.querySelector(".card");
const btn = document.querySelector("#btn"),
  contenedor = document.querySelector(".contenedor");

titulo.innerText = "Clase 15";
tituloSecundario.innerText = "Asincronía y promesas";
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

//asincronía
function square(num) {
  return num * num;
}

function logSquare(num) {
  console.log(square(num));
}

//logSquare(4);

/* console.log("Inicio sesion");
setTimeout(()=>{
  console.log("Carga bandeja de entrada");
}, 0)
console.log("Pagina de carga"); */

/* for (const iterator of "Hola") {
  setTimeout(()=>{
    console.log(iterator);
  }, 2500)
}
for (const iterator of "tarola") {
  console.log(iterator);
} */

btn.addEventListener("click", () => {
  setTimeout(() => {
    card.classList.remove("active");
  }, 2500);
  card.classList.add("active");
});
/* setInterval(()=>{
  console.log("Hola");
},1000) */
//Promesas
const eventoFuturo = (res) => {
  return new Promise((resolve, reject) => {
    //cuerpo de la promesa
    if (res === true) {
      resolve("Toma tu compact");
    } else {
      reject("No te devuelvo el compact");
    }
  });
};

console.log(eventoFuturo(false));

const pedirHamburguesa = (res) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      res
        ? resolve("Veni retirar tu pedido")
        : reject("Nos quedamos sin papas");
    }, 2500);
  });
};
/* 
console.log(pedirHamburguesa(true));
console.log(pedirHamburguesa(false)); */
pedirHamburguesa(true)
.then((response) => {
  console.log(response);
}).catch((error)=>{
console.log(error);
}).finally(()=>{
  console.log('Gracias vuelva pronto');
});
