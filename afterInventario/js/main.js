const titulo = document.querySelector("#titulo"),
  autor = document.querySelector("#autor"),
  isbn = document.querySelector("#isbn"),
  categoria = document.querySelector("#categoria"),
  precio = document.querySelector("#precio"),
  img = document.querySelector("#img"),
  search = document.querySelector("#search"),
  tbody = document.querySelector("#table-body"),
  formInventario = document.querySelector("#formInventario");
const radios = document.querySelectorAll('input[type="radio"]');

//Libros ya guardados en inventario
const inventario = [
  {
    titulo: "cuentos completos",
    autor: "edgard alan poe",
    isbn: "9788491052166",
    categoria: "cuento",
    precio: 2500.99,
    img: "http://boutiquedezothique.es/793-large_default/cuentos-completos-edgar-allan-poe.jpg",
  },
  {
    titulo: "quien pierde paga",
    autor: "stephen king",
    isbn: "9789506443924",
    categoria: "terror",
    precio: 1800.99,
    img: "http://d2r9epyceweg5n.cloudfront.net/stores/001/421/275/products/king_quienpierdepaga_libro3d1-186af08b4fbf47f81116071041288636-640-0.png",
  },
];
//Seteo variable libros, si LS vacio entonces libros = inventario

let libros;
if (localStorage.getItem("inventario")) {
  libros = JSON.parse(localStorage.getItem("inventario"));
} else {
  libros = inventario;
}

//Constructor del objeto Libro
function Libro(titulo, autor, isbn, categoria, precio, img) {
  this.titulo = titulo;
  this.autor = autor;
  this.isbn = isbn;
  this.categoria = categoria;
  //Si campo precio vacío this.precio = 1
  if (precio == "") {
    this.precio = 1;
  } else {
    this.precio = parseFloat(precio);
  }

  //Si campo img vacío this.img genérica
  if (img == "") {
    this.img = `https://via.placeholder.com/150`;
  } else {
    this.img = img;
  }
  //utilizar ternario
}

/* Declaración de Funciones */
//Cargar al inventario
function cargarInventario(arr, libro) {
  return arr.push(libro);
}
//Funciones de LS
function guardarLS(arr) {
  localStorage.setItem("inventario", JSON.stringify(arr));
}

//Función de búsqueda genérica
function filtrar(arr, filtro, param) {
  return arr.filter((el) => {
    //desarrollar
    return param == "precio"
      ? el.precio <= parseFloat(filtro)
      : el[`${param}`].includes(filtro.toLowerCase());
  });
}

//Manipular el DOM
function crearHtml(arr) {
  tbody.innerHTML = "";

  let html = "";
  for (const item of arr) {
    //desestructurar obj
    html = `<tr>
  <td>${item.titulo}</td>
  <td>${item.autor}</td>
  <td>${item.isbn}</td>
  <td>${item.categoria}</td>
  <td>$${item.precio}</td>
  <td><img src="${item.img}"/></td>
  <td><button class="btn red" id="${item.isbn}">Borrar</button></td>
  </tr>`;
    tbody.innerHTML += html;
  }
  /* Agregar eventos a los botones LIVE */
  const arrayBotones = document.querySelectorAll("td .btn");
  arrayBotones.forEach((btn) => {
    btn.addEventListener("click", () => {
      libros = libros.filter((el) => el.isbn != btn.id);
      console.log(libros);
      //guardar en el local y pintar html
      guardarLS(libros);
      crearHtml(libros);
    });
  });
}

/* Fin de funciones */

/* Ejecución de funciones */
crearHtml(libros);
//Listeners
formInventario.addEventListener("submit", (e) => {
  e.preventDefault();
  const newLibro = new Libro(
    titulo.value,
    autor.value,
    isbn.value,
    categoria.value,
    precio.value,
    img.value
  );
  cargarInventario(libros, newLibro)
  guardarLS(libros)
  crearHtml(libros)
  formInventario.reset();
});

//Listeners de búsqueda
search.addEventListener("input", () => {
  let nuevoFiltro = filtrar(libros, search.value, "titulo");
  crearHtml(nuevoFiltro);
});
//aramr la logica para los radiobuttons evento change
