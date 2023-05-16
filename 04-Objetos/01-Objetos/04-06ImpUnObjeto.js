let persona  = {
    nombre :'Carlos',
    apellido : 'Perez',
    edad : 25,
    datosCompletos : function(){
        return this.nombre + ' ' + this.apellido + ' tiene ' + this.edad + ' años';
    }
}
/*Asi que vamos a ver algumas formas de mandar a llamar a los objetos cuando 
trabajamos en un navegador web con JavaScript */

// Ejemplo 1
// Concatenar cada valor de cada propiedad
console.log(persona.nombre + ' ' + persona.apellido + ' ' + persona.edad);

//Ejemplo 2
//iteracion de cada propiedad utilizando FOR IN
for( nombrePersona in persona){
    console.log(persona[nombrePersona]);
}

//Ejemplo 3
//El metodo y la sintaxis (object.values) esto te devuelve a nuestro objeto como un arreglo
let personaArray = Object.values(persona);
console.log(personaArray);

//Ejemplo 4
// El metodo JSON convierte nuestro objeto una cadena de caracteres 
let personaString = JSON.stringify (persona);
console.log(personaString);







