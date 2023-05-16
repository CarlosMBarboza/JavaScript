/*Distintas Sintaxis o formas de  Crear un objeto  */

let miObjeto = new Object();
miObjeto.nombre = "Juan";

let miObjeto2 = {};// Forma resumida para crear un nuevo objeto
miObjeto2.nombre = "Pedro";

let miCadena1 = new String();// Funcion constructor de tipo String, se conose como una clase o tipo de clase String
miCadena1.nombre = "Juan";

let miCadena2 = 'hola';//Forma resumida esto es lo mas recomendable de usar

let miArreglo1 = new Array();//Forma tradicional  para crear un nuevo objeto
miArreglo1.push('Juan');

let miArreglo2 = [];//Forma resumida esto es lo mas recomendable de usar

let miFuncion1 = new function(){};//Forma tradicional  para crear un nuevo objeto
miFuncion1.nombre = 'Juan';

let miFuncion2 = function(){};//Forma resumida esto es lo mas recomendable de usar
miFuncion2.nombre = 'Pedro';