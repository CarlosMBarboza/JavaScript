/*Los constructores son una funcion especial para crear un objeto,
se manda a llamar con la palabra reservada NEW,
Los metodos que van hacer usados como constructoreS tienen que empezar con MAYUSCULA */
// funcion constructor de objetos de tipo Persona

function Persona(nombre, apellido,email){
this.nombre = nombre;// En este momento el nombre del parametro es igual al nombre del atributo
this.apellido = apellido;// Aasi que si vemos this es porque estamos trabajando con las propiedades de nuestro objeto
this.email = email;
}

// Creamos un objeto Persona
let padre = new Persona('Carlos', 'Barboza', 'michaelq@hotmail');
console.log(padre);

let madre = new Persona('Cintia', 'Deter', 'cintiad@hotmail');
console.log(madre);

/* tienen la misma propiedad pero los valores son distintos, esto es porque cada ves
que creamos un objeto tiene su propia ubicacion 
en memoria, cada una tiene un espacio de memoria*/