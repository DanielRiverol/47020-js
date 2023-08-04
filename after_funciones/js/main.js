//El cajero automático
//Debemos generar un script para la operación de un cajero automático
/* El mismo tiene que: 
1- Mostrar un mensaje de bienvenida
2- Permitir hasta 3 intentos de ingreso con el PIN del cliente
  2.1- Si ingresa correctamente dar mensaje de Bienvenida
      2.1.1- En pantalla mostrar las siguientes opciones: 
          a- Saldo
          b- Retiro
          c- Depósito
          d- Salir 
      2.1.2 - Al finalizar mostrar mensaje
  2.2- Terminados los intentos informar al cliente que se comunique con el banco
*/

let PIN = "5701";
let ingresar = false;
function ingreso() {
  //alert("Bienvenido al Banco")
  for (let i = 2; i >= 0; i--) {
    let ingresoPIN = prompt("Ingresa tu PIN");
    if (ingresoPIN == PIN) {
      alert("Bienvenido al Banco");
      ingresar = true;

      break;
    } else {
      alert("error");
    }
  }
}

ingreso()
if (ingresar) {
  let saldo = 20000;
  let opcion = prompt(
    "Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar."
  );
  while (opcion != "x") {
    switch (opcion) {
      case "1":
        alert(" Tu saldo es " + saldo);
        break;
      case "2":
        let retiro = parseFloat(prompt("Ingresa el monto a retirar"));
        if (retiro <= saldo) {
          saldo = saldo - retiro;
          alert("Retiro exitoso");
        } else {
          alert("Saldo insuficiente");
        }
        break;
      case "3":
        let deposito = parseFloat(prompt("Ingresa el monto a depositar"));
        saldo = saldo + deposito;
        alert("Desposito exitoso");
        break;

      default:
        alert("Opcion no valida");
        break;
    }
    //condicion de salida
    opcion = prompt(
      "Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar."
    );
  }
  alert("Gracias por operar con nosotros")
}else{
  alert("Retendremos tu tarjeta")
}
