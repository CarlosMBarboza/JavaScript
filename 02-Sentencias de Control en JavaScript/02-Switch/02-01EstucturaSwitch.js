let numero = 6; // Variante que vamos a utilizar

let numeroTexto = 'Valor Desconocido';//Siempre hay que declarar esta variable

switch (numero){ //Aca agregamos la Variante que vamos a utilizar
    case 1 : // Aca si conicide con la variente 
        numeroTexto = 'Numero uno';// Mensaje de respuesta
        break;//Va siempre en cada uno, por que es el cierre del caso
    case 2 :
        numeroTexto = 'Numero dos' ;   
        break;
    case 3 :
        numeroTexto = 'Numero Tres' ;   
        break;
    case 4 :
        numeroTexto = 'Numero Cuatro' ;   
        break;
    default: // Siempre va esto, es el cierre de la extructura  y va el mensaje final
    numeroTexto = 'Valor Desconocido' ; // Mensaje final
}
/*-----Esto va sienpre fuera dela extructura ----------- */
console.log(numeroTexto) 