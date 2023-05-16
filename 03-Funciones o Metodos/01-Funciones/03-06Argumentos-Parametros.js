                 /* =====Argumentos y Parametros===== */
                           //==Parametros   

/*Cuando definimos una funcion, podemos observar que dentro de los parametros hemos definido variables
 y a esto se la va a conocer como parametro de nuestra funcion */  

                            //==Argumentos

/*Cuando definimos los Argumentos son los valores que finalmente pasamos a nuetra funcion,
en otras palabras son los valores que vamos a asignar a los parametro que hemos definido en nuestra funcion*/

/*En resumen ,los perametros es la lista de variables que definimos en una funcion y los argumentos son 
los valores que nos enviamos al llamar a la funcion*/

let sumar = function(a = 4, b = 5){// Aca se declaran los parametros
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);// tercer argumento sin declarar perametros solo con argumentos
    return a + b + arguments[2];// el argumento [2] se puede declarar sin tener parametros
};                             // solo teniendo Argumentos 

resultado = sumar(3, 6, 7);// Aca se declaran los argumentos 
console.log(resultado);

