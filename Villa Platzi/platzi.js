var vp = document.getElementById("villaplatzi");
var lienzo = vp.getContext("2d");

var xLobo = 150;
var yLobo = 150;

var fondo = {
  url: "tile.png",
  cargaOk: false
};
var vaca = {
  url: "vaca.png",
  cargaOk: false
};
var cerdo = {
  url: "cerdo.png",
  cargaOk: false
};
var pollo = {
  url: "pollo.png",
  cargaOk: false
};
var lobo = {
  url: "lobo.png",
  cargaOk: false
};

//cantidad a dibujar de elementos (vaca, cerdos, pollos)
var cantidad = aleatorio(1, 7);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarlobo);
document.addEventListener("keyup", moverLobo);

function cargarFondo() {
  fondo.cargaOk = true;
  dibujar();
}

function cargarVaca() {
  vaca.cargaOk = true;
  dibujar();
}

function cargarCerdo() {
  cerdo.cargaOk = true;
  dibujar();
}

function cargarPollo() {
  pollo.cargaOk = true;
  dibujar();
}

function cargarlobo() {
  lobo.cargaOk = true;
  dibujar();
}

function dibujar() {
  if (fondo.cargaOk = true) {
    lienzo.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOk) {
    for (var i = 0; i < cantidad; i++) {
      x = aleatorio(0, 5);
      y = aleatorio(0, 5);
      x = x * 70;
      y = y * 70;
      lienzo.drawImage(vaca.imagen, x, y);
    }
  }
  if (cerdo.cargaOk) {
    for (var i = 0; i < cantidad; i++) {
      x = aleatorio(0, 5);
      y = aleatorio(0, 5);
      x = x * 70;
      y = y * 70;
      lienzo.drawImage(cerdo.imagen, x, y);
    }
  }
  if (pollo.cargaOk) {
    for (var i = 0; i < cantidad; i++) {
      x = aleatorio(0, 5);
      y = aleatorio(0, 5);
      x = x * 70;
      y = y * 70;
      lienzo.drawImage(pollo.imagen, x, y);
    }
  }
  if (lobo.cargaOk) {
    x = xLobo;
    y = yLobo;
    lienzo.drawImage(lobo.imagen, x, y);
    moverLobo(x, y);
  }
}

function moverLobo(evento) {
  var movimiento = 10;
  var teclas = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  };
  // console.log(teclas);

  switch (evento.keyCode) {
    case teclas.UP:
      yLobo = yLobo - movimiento;
      console.log("Vamos pa arriba");
      lienzo.drawImage(lobo.imagen, x, yLobo);
      break;
    case teclas.DOWN:
      yLobo = yLobo + movimiento;
      console.log("Vamos pa abajo");
      lienzo.drawImage(lobo.imagen, x, yLobo);
      break;
    case teclas.RIGHT:
      xLobo = xLobo + movimiento;
      console.log("Vamos pa la derecha");
      lienzo.drawImage(lobo.imagen, xLobo, y);
      break;
    case teclas.LEFT:
      xLobo = xLobo - movimiento;
      console.log("Vamos pa la izquierda");
      lienzo.drawImage(lobo.imagen, xLobo, y);
      break;
  }
}

function aleatorio(min, max) {
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}
