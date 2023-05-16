// Este codigo se ejecuta almenos una ves si es falso y luego sale del ciclo
// Si es verdadero el codigo se sigue ejecutando 

let contador = 0;//Siempre va un contador o un acumulador 

do{//Esto se escribe al reves de la sentencia while
    console.log(contador);
    contador++;  // el bloque de codigo termina antes del while
}while ( contador < 3);
console.log('Fin del ciclo');

/*=== Ejemplo de Comparacion ==== */
/* While 

let contador = 0; Siemplre va un contador o acumulador 

 while ( contador < 3){
    console.log(contador); 
    contadoe++;
 }
 console.log('fin del ciclo');*/