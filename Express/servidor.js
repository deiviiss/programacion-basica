var libreria = require("express"); /* require es una funcion especial que busca
las librerias instaladas en el equipo mediante npm install y las guarda en una
variable.*/
var servidor = libreria(); /*Se invoca la variable como si fuera una funcion y se
ingresa en una variable propia*/

servidor.get("/", inicio); /*Funciona como una manejador de evento, "/" es el
home de la url que va despues, inicio es la funcion que se dispara depues de
arrancar el home*/
servidor.get("/cursos", cursos);

function inicio(req, res)
/*req y res son la peticion y el resultado, lo que el navegador le esta pidiendo
al servidor y lo que el servidor esta respondiendo.*/
{
  res.send("Este es el Home"); // send lo que envía el servidor.
}

function cursos(req, res)
{
  res.send("Estos son los cursos");
}

servidor.listen(8989); // listen se utiliza para correr el servidor.
