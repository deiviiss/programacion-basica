var boton_verde = document.getElementById("botoncito_verde");
var boton_blanco = document.getElementById("botoncito_blanco");
var boton_naranja = document.getElementById("botoncito_naranja");
boton_verde.addEventListener("click", colorVerde);
boton_blanco.addEventListener("click", colorBlanco);
boton_naranja.addEventListener("click", colorNaranja);

function colorNaranja()
{
  color = "orange";
}

function colorVerde()
{
  color = "green";
}

function colorBlanco()
{
  color = "white";
}

var cuadrito = document.getElementById("dibujito");
var lienzo = cuadrito.getContext("2d");
var ancho = cuadrito.width;
var colorcito = "White";
var color;
var x;
var y;
var estado;

dibujarLinea(colorcito, 1,1,1,ancho - 1);
dibujarLinea(colorcito, 1,ancho - 1,ancho - 1,ancho - 1);
dibujarLinea(colorcito, ancho - 1,1,ancho - 1,ancho - 1);
dibujarLinea(colorcito, 1,1,ancho - 1,1);
dibujarLinea(colorcito, ancho - 1,1,ancho - 1,ancho - 1);

cuadrito.addEventListener("mousedown", presionarMouse); /*addEventListener a
mousedown para ejecutar la funcion dibujarMouse*/
cuadrito.addEventListener("mouseup", soltarMouse);
cuadrito.addEventListener("mousemove", dibujarMouse);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 1;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function presionarMouse(evento)
{
  estado = 1
  x = evento.layerX;
  y = evento.layerY;
  console.log(evento);

}
function soltarMouse(evento)
{
  estado = 0
  x = evento.layerX;
  y = evento.layerY;
  console.log(estado);
}

function dibujarMouse(evento)
{
  if (estado == 1)
  {
    dibujarLinea(color, x, y, evento.layerX, evento.layerY);
  }
  x = evento.layerX;
  y = evento.layerY;
}
