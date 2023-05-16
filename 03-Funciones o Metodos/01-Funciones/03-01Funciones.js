// una funcion es un codigo re-utilizable que se lo puede llamar cuamtas veces queramos
//============Consepto de HOISTING =================
// para definir una funcion se utiliza la sigiente sintaxis (function)
// Dentro de los parentesis agregamos lo que se conose como argumentos(informacion de entrada
// con la que trabaja la funcion)
// declaracion de la funcion
function miFuncion ( a, b) {
    console.log('suma : ' + (a + b));//Aca en primer lugar se declara
}
// Ejecucion de la funcion
miFuncion (2, 3); // Aca se llama  la funcion

//SE PUEDE DEFINIR NUESTRA FUNCION EN CUALQUIER PARTE DE NUESTRO PROGRAMA Y 
//LA VAMOS A PODER LLAMAR ANTES O DESPUES DE DEFINIRLA