class Pakiman /*Clase Pakiman,dentro de las clases no hay que escribir function
ya que todo bloque de codigo dentro de una clase es una function*/
{
  constructor(n, v, a) //En el constructor van las varibles.
  {
    this.imagen = new Image(); //Se crea una clase de tipo Image();
    this.nombre = n; //This se refiere a las variables dentro de la clase//
    this.vida = v;
    this.ataque = a;

    this.imagen.src = imagenes[this.nombre]; // Ruta hasta que pase por nombre.
  }
  mostrar() //Function utilizada para mostrar la imagen.
  {
    document.write("<strong>" + this.nombre + "</strong><br/>");
    document.body.appendChild(this.imagen); // body.appendChild para dibujar.
    document.write("<p>"); //Parrafo.
    document.write("Vida: " + this.vida + "<br/>");
    document.write("Ataque: " + this.ataque + "<hr></hr>");
    document.write("</p>");
  }
}
