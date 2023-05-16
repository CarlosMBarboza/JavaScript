/*Ejemplos de tipos de datos en javab Script */
//Tipo String
var nombre= "Carlos";
var apellido="Barboza";
console.log(nombre + apellido);

//Tipo de Dato Numerico
var numero= 35;
console.log(numero);

// Tipo de Dato Object
var object={
    nombre: "Pedro",
    apellido: "Gonzalez",
    telefono:"14578-9152"
}
console.log(object);

//Tipos de valores Booleanos
var esVerdadero= true;
console.log(esVerdadero);

var esFalso= false;
console.log(esFalso);

//Tipo de Datos Function
function miFuncion(){}
console.log(miFuncion)

//tipo de dato Symbol
var simbolo= Symbol("mi simbolo");
console.log(simbolo);

//tipo clase es una function
class Persona{
    constructor(nombre, apellido, edad){
        this.nombre= nombre;
        this.apellido= apellido;
        this.edad= edad;
    }
}
console.log(typeof Persona);

//tipo undefined
var x;
console.log(x)

// Null= ausencia de valor
var y = null;
console.log(y);

// Array
var autos = ['bmw', 'audi', 'ford']
console.log(autos);
console.log(typeof autos);