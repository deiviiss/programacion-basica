var imagenes = []; //Array de tipo asociativo.
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = []; // Se crea una array vacio.
coleccion.push(new Pakiman("Cauchin", 100, 80)); // Se agregan mediante push.
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 140, 45));

for (var pak of coleccion) /*Ciclo que solo va operar por la cantidad de objetos
en el array (pak), y recorre todos los objetos dentro.*/
{
  pak.mostrar();
}
