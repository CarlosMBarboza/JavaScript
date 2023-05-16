let a = 3, b = 2; c = "3";

// Se revisa el valor sin importar el tipo
let z = a == b;
console.log(z);

z = a == c;
console.log(z)

//Se revisa los valores pero tambien los tipos de datos

z = a === c;
console.log(z);

/*------Operador de diferencia ( ! esto es distinto o diferente )--------- */

// Se revisa el valor sin importar el tipo y si son distintos
 z = a != c;
console.log(z);

//Se revisa los valores pero tambien los tipos de datos y si son distintos

z = a !== c;
console.log(z);

/*--------Operadores Relacionales( >, <, >=,<=)---------- */
// Se revisa el valor sin importar el tipo
 z = a < b;
console.log(z);

z = a <= b;
console.log(z);

//Se revisa los valores pero tambien los tipos de datos

z = a > b;
console.log(z);

z = a >= b;
console.log(z);