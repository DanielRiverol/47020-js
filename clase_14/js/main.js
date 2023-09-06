document.title = "Clase 14 | Comisión 47020";
const titulo = document.querySelector("h1 span"),
  tituloSecundario = document.querySelector("h2#secundario");

titulo.innerText = "Clase 14";
tituloSecundario.innerText = "Librerías";

const btnSwal = document.getElementById("botonSwal"),
  btnToast = document.getElementById("botonToast"),
  horaActual = document.querySelector("#horaActual");

const creditCard = document.querySelector("#credit-card"),
  icons = document.querySelectorAll(".fa-brands");

btnSwal.addEventListener("click", () => {
  Swal.fire({
    title: 'Borrar producto?',
    text: "Esta accion no se puede deshacer!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si borrar!'
  }).then((result) => {
    if (result.isConfirmed) {
      //FUncion para eliminar el producto
      Swal.fire(
        'Producto eliminado!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
});

btnToast.addEventListener("click", () => {
  Toastify({
    text: "Producto agregado al carrito",
    duration: 3000,
    //destination: "https://github.com/apvarun/toastify-js",
    //newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function(){} // Callback after click
  }).showToast();
});

const btnCalcular = document.querySelector("#calcular");
let dates = document.querySelectorAll('input[type="date"]');

const DateTime= luxon.DateTime

let ahora= DateTime.now()
/* console.log(ahora);
console.log(ahora.toString());
console.log(ahora.toLocaleString(DateTime.DATE_FULL));
//titulo.innerText=ahora.toLocaleString(DateTime.DATE_FULL)
console.log(ahora.setLocale("es").toLocaleString(DateTime.DATE_HUGE));
console.log(ahora.toLocaleString(DateTime.TIME_24_WITH_LONG_OFFSET));
console.log(ahora.setLocale("es").toLocaleString(DateTime.TIME_24_WITH_LONG_OFFSET));
console.log(ahora.toLocaleString(DateTime.TIME_24_SIMPLE));
console.log(ahora.setLocale("ko").toLocaleString(DateTime.DATE_FULL)); */

let inicio= DateTime.now().toFormat('yyyy-MM-dd')
let fin= DateTime.now().plus({months:4}).toFormat('yyyy-MM-dd')
dates.forEach(el=>{
  el.setAttribute("min", inicio)
  el.setAttribute("max", fin)
})
function calcularEstadia(checkIn, checkOut){
  let total= checkOut.diff(checkIn)
  return total.as('days')
}
//armar una funcion que calcule la estadia
btnCalcular.addEventListener('click',()=>{
  let checkIn = DateTime.fromISO(document.getElementById("checkIn").value);
  let checkOut = DateTime.fromISO(document.getElementById("checkOut").value);
let estadia=calcularEstadia(checkIn,checkOut)
let precioTotal = estadia * 12000
console.log(precioTotal);
Swal.fire({
  title: "Resultado",
  text: `Tu estadía de ${estadia} días tiene un precio total de $${precioTotal}`,
  icon: "info",
  iconColor: "#00ff00",
  showCancelButton: true,
  confirmButtonText: "Confirmar",
  cancelButtonText: "Cancelar",
  position: "top-center",
  backdrop: "#445566aa",
});
})