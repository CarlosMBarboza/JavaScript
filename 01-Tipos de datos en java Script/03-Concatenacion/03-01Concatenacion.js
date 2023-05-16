        // Concatenacion de Cadenas
/*--------------------------------------------*/ 

            // Primera Opcion de Concatenacion
var nombre = " Carlos ";
var apellido = " Garcia ";
var direccion = "Blandebgues 979";

var nombreCompleto = nombre +' '+ apellido +' '+direccion;
console.log(nombreCompleto);

/*------------------------------------------------------ */

            // Segunda Opcion  de Concatenacion
var nombreCompleto2 ='Carlos'+ ' '+ 'Barboza' +' '+ 'Blandenges 979';
console.log(nombreCompleto2);

/*---------------------------------------------------------- */

// Concatenacion de un String con un int o numero
//Siempre se ve de izquierda a derrecha la concatenacion
var x = nombre + 137;
console.log(x);

/*------------------------------------------------------------ */
//En este caso los numeros no se suman se agregan uno a lado del otro
var x = nombre + 3 + 8;
console.log(x);

/*------------------------------------------------------------ */

// En este caso para sumar dos o mas numeros el comando es que tienen que estar dentro del -->( )
// y despues del String
var x = nombre + (3 + 5);
console.log(x);

/*--------------------------------------------------------------- */

//En el caso que los numeros esten  antes que el String, en ese caso se suman
var x = (3 + 5) + nombre;
console.log(x);