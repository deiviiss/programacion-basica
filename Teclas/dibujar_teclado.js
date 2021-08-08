/* Varible especial (objeto literal) con mas variables
*/
var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};
// console.log(teclas);

let areaDibujo = document.getElementById("area_dibujo");
let lienzo = areaDibujo.getContext("2d");
let ancho = areaDibujo.width;

let color = "White";
let estado;
let x = 150;
let y = 150;
let colorcito = "white";
let movimiento = 10;

//*events
//teclado
document.addEventListener("keydown", dibujarTeclado);

//mouse
areaDibujo.addEventListener("mousedown", presionarMouse);
areaDibujo.addEventListener("mouseup", soltarMouse);
areaDibujo.addEventListener("mousemove", dibujarMouse);

//dibuja borde del canvas
dibujarLinea(color, 1, 1, 1, ancho - 1);
dibujarLinea(color, 1, ancho - 1, ancho - 1, ancho - 1);
dibujarLinea(color, ancho - 1, 1, ancho - 1, ancho - 1);
dibujarLinea(color, 1, 1, ancho - 1, 1);

//*functions

//dibuja linea
function dibujarLinea(colorLinea, x1, y1, x2, y2) {
  lienzo.beginPath();
  lienzo.strokeStyle = colorLinea;
  lienzo.lineWidth = 3;
  lienzo.moveTo(x1, y1);
  lienzo.lineTo(x2, y2);
  lienzo.stroke();
  lienzo.closePath();
}

//dibujar con teclado
function dibujarTeclado(evento) {
  // console.log(evento);

  switch (evento.keyCode) {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento);
      y = y - movimiento;
      console.log("Vamos pa arriba");
      break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento);
      y = y + movimiento;
      console.log("Vamos pa abajo");
      break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y);
      x = x + movimiento;
      console.log("Vamos pa la derecha");
      break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y);
      x = x - movimiento;
      console.log("Vamos pa la izquierda");
      break;
  }
}

//dibujar con mouse
function presionarMouse(evento) {
  estado = 1
  x = evento.layerX;
  y = evento.layerY;
  console.log(evento);
}
function soltarMouse(evento) {
  estado = 0
  x = evento.layerX;
  y = evento.layerY;
  console.log(estado);
}

function dibujarMouse(evento) {
  if (estado == 1) {
    dibujarLinea(color, x, y, evento.layerX, evento.layerY);
  }
  x = evento.layerX;
  y = evento.layerY;
}
