let texto = document.getElementById("texto_lineas");
let botonCalcular = document.getElementById("btn_calcular");
let areaDibujo = document.getElementById("area_dibujo");

let lienzo = areaDibujo.getContext("2d");
let ancho = areaDibujo.width;
let color = "White";

//envents
botonCalcular.addEventListener("click", dibujoPorClick);

//dibuja borde del canvas
dibujarLinea(color, 1, 1, 1, ancho - 1);
dibujarLinea(color, 1, ancho - 1, ancho - 1, ancho - 1);
dibujarLinea(color, ancho - 1, 1, ancho - 1, ancho - 1);
dibujarLinea(color, 1, 1, ancho - 1, 1);

//functions

//dibuja linea
function dibujarLinea(colorLinea, x1, y1, x2, y2) {
  lienzo.beginPath();
  lienzo.strokeStyle = colorLinea;
  lienzo.moveTo(x1, y1);
  lienzo.lineTo(x2, y2);
  lienzo.stroke();
  lienzo.closePath();
}

// dibuja lineas de usuario
function dibujoPorClick() {
  let datos_texto = parseInt(texto.value)
  let lineas = datos_texto;
  let espacio = ancho / lineas;
  let yi, xf;

  for (i = 0; i < lineas; i++) {
    yi = espacio * i;
    xf = espacio * (i + 1);
    dibujarLinea(color, 0, yi, xf, ancho)
  }

}
