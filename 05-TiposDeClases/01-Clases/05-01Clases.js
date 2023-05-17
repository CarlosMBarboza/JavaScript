/*Como crear un clase  a partir de un objeto
A deferencia  de los objetos, laas clases es una plantilla, asi que en la clase vamos 
a definir los atributos y metodos que queremos que contengan nuestros objetos
y aparttir de esta clase o plantilla vamos a poder crear instancias
Asi que un objeto es una instancia de una clase */

/* un Objeto puede tener valores en sus atributos Ejemplo:"nombre, apellido, direccion, etc"
Para crear una plantilla tenes que teneer en cuenta 3 caracteristicas
1-Nombre de la clase 
2-Atributos de la clase
3-Metodos o operaciones de la clase */

class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}
let persona1 = new Persona("Juan", "Perez", 35);
let persona2 = new Persona("Pedro", "Perez", 35);
/* Como vemos en la clase Persona tenemos 3 atributos y 3 metodos
1- nombre
2- apellido
3- edad
*/
console.log(persona1);
console.log(persona2);