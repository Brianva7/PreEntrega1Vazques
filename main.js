// VARIABLES

alert("Bienvenido a Ticket Compra!");
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("ingrese su apellido");
alert(
  "Sera necesario informar su numero de documento unico ya que esta permitida una compra por persona"
);
let dni = prompt("Ingrese su numero de dni");

// CONSOLE.LOG

console.log(nombre, apellido, dni);

// FUNCION
function compraEntradaBanda() {
  let = precioEntrada = 1000;
  alert(
    `El precio por entrada es de $${precioEntrada}, cuantas entradas queres comprar?`
  );
  let cantidadDeEntradas = parseInt(
    prompt(`Ingresa la cantidad de entradas que queres (maximo: 5)
    1- Una entrada
    2- Dos entradas
    3- Tres entradas
    4- Cuatro Entradas
    5- Cinco entradas`)
  );

  // SWITCH

  switch (cantidadDeEntradas) {
    case 1:
      alert(`Seleccionaste la cantidad de ${cantidadDeEntradas}`);
      break;
    case 1:
      alert(`Seleccionaste la cantidad de ${cantidadDeEntradas}`);
      break;
    case 2:
      alert(`Seleccionaste la cantidad de ${cantidadDeEntradas}`);
      break;
    case 3:
      alert(`Seleccionaste la cantidad de ${cantidadDeEntradas}`);
      break;
    case 4:
      alert(`Seleccionaste la cantidad de ${cantidadDeEntradas}`);
      break;
    case 5:
      alert(`Seleccionaste la cantidad de ${cantidadDeEntradas}`);
      break;
    default:
      alert(
        "La cantidad ingresada no es correcta! Por favor, seleccione un valor menor a 5"
      );
      break;
  }
  let precioEntradas = cantidadDeEntradas * precioEntrada;
  alert(`El precio total es de $${precioEntradas}`);
  let debito = 500;
  let credito = 2500;
  let dineroDisponible = debito + credito;
  alert(`Su dinero diponible para compras con debito es de: ${debito}.
  su dinero disponible para compras con credito es de: ${credito}`);
  let metodoDePago = prompt(
    `con cual de sus metodos de pago disponibles desea abonar? (ingrese "total" para seleccionar el total disponible.)`
  );

  switch (metodoDePago) {
    case "debito":
      // IF

      if (debito >= precioEntradas) {
        alert(
          `Compra realizada con exito! Muchas gracias ${nombre} ${apellido}.`
        );
        alert(`NOTA: el limite de compra para el DNI: ${dni} fue alcanzado`);
      } else {
        alert(`El dinero disponible no es suficiente`);
      }
      break;
    case "credito":
      if (credito >= precioEntradas) {
        alert(
          `Compra realizada con exito! Muchas gracias ${nombre} ${apellido}.`
        );
        alert(`NOTA: el limite de compra para el DNI: ${dni} fue alcanzado`);
      } else {
        alert(`El dinero disponible no es suficiente`);
      }
      break;
    case "total":
      if (dineroDisponible >= precioEntradas) {
        alert(
          `Compra realizada con exito! Muchas gracias ${nombre} ${apellido}.`
        );
        alert(`NOTA: el limite de compra para el DNI: ${dni} fue alcanzado`);
      } else {
        alert(`El dinero disponible no es suficiente`);
      }
      break;
    default:
      alert("El metodo ingresado no es correcto");
      break;
  }
}

compraEntradaBanda();
