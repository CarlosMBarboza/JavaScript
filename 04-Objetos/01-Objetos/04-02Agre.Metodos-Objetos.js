// ===== Pera definir un Objeto =============

let persona = { // Dentro de las llaves se colocan los dos puntos 
    nombre: 'carlos',//Aca van las propiedades del objeto, para agregar mas propiedades colocamos una coma 
    apellido: 'Beker',
    email : 'CarlosBarboza@hotmail.com',
    edad : 42,
    nombreCompleto : function(){// Para llamar al metodo (nombreCompleto) se utiliza el (this. el atribito a llamar )
        return this.nombre + ' ' + this.apellido;
    }
}
// Para poder acceder a este Objeto persona y sus atributos  (persona. y el atributo que quieras llamar )
// Pra imprimir o llamar todo el objeto se utiliza solo  ( persona )
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());