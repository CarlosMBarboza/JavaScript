/*El tipo primitivo no contiene propiedades ni metodos Ej[  let x = 10; => esto es una literal de tipomprimitivo]
en este caso no tenemos  propiedades ni metodos asociados a este valor.
Un objeto puede contener propiedades y metodos
Le podemos asignar cualquier valor de tipo primitivo segun nuestras clases y objetos que creamos posterior mente */

// ===== Pera definir un Objeto =============

let persona = { // Dentro de las llaves se colocan los dos puntos 
    nombre: 'carlos',//Aca van las propiedades del objeto, para agregar mas propiedades colocamos una coma 
    apellido: 'Beker',
    email : 'CarlosBarboza@hotmail.com',
    edad : 42
}
// Para poder acceder a este Objeto persona y sus atributos  (persona. y el atributo que quieras llamar )
// Pra imprimir o llamar todo el objeto se utiliza solo  ( persona )
console.log(persona.edad);
console.log(persona);