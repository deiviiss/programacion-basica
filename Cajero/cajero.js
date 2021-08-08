class Billete {
  constructor(valor, cantidad) {
    this.valor = valor;
    this.cantidad = cantidad;
  }
}

let button = document.getElementById("extraer");
let resultado = document.getElementById("resultado");

let caja = [];
let entregado = [];
let division = 0;
let papeles = 0;

//cargamos cajero
caja.push(new Billete(50, 3))
caja.push(new Billete(20, 2))
caja.push(new Billete(10, 2))

// eventos
button.addEventListener("click", entregarDinero);

function entregarDinero() {

  let cantidadUsuario = document.getElementById("cantidad_usuario")
  let dinero = parseInt(cantidadUsuario.value);

  for (const bi of caja) {
    console.log(bi);

    if (dinero > 0) {
      division = Math.floor(dinero / bi.valor)
      // console.log(division);
      if (division > bi.cantidad) {
        papeles = bi.cantidad;
      }
      else {
        papeles = division
      }

      entregado.push(new Billete(bi.valor, papeles))
      dinero = dinero - (bi.valor * papeles)
    }
  }

  if (dinero > 0) {
    resultado.innerHTML = "No puedo entregar esa cantidad"
  }
  else {
    for (const efectivo of entregado) {
      if (efectivo.cantidad > 0) {
        resultado.innerHTML = ("Billetes de $ " + efectivo.valor + " = " + efectivo.cantidad + "<br/>")
      }
    }
  }
  // console.log(entregado);
}