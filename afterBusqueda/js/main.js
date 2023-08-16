const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1100, img: "esculpidas.webp" },
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

const buscarServicio = (arr, filtro) => {
  const encontrado = arr.find((el) => el.nombre.includes(filtro));
  return encontrado;
};
const buscarUsuario = (arr, nickname, pass) => {
  const encontrado = arr.find((el) => el.nick == nickname && el.pass == pass);
  return encontrado;
};

const servEncontrado = buscarServicio(servicios, "mani");
/* console.log(servEncontrado.nombre);
const suma = (a, b) => a + b;
console.log(suma(2, 4));

const users = [
  { nick: "lala", pass: 123 },
  { nick: "pepe", pass: 1234 },
];
const user = buscarUsuario(users, "pepe", 1234);
console.log(user); */
const carrito = [];

function filtrarPorMenorPrecio(arr, filtro) {
  return arr.filter((el) => el.precio <= filtro);
}
const baratos = filtrarPorMenorPrecio(servicios, 2500);

console.log(baratos);
const masBaratos = filtrarPorMenorPrecio(baratos, 1500);
console.log(masBaratos[2]);
carrito.push(masBaratos[2]);
carrito.push(masBaratos[0]);

console.log(carrito);
const total = carrito.reduce((acc, el) => acc + el.precio, 500);
console.log(total);