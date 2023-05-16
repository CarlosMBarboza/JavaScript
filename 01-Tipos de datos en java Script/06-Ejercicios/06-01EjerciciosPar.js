/*---------------Utilizacion de resto o residuos ------------------ */
let a = 9, b = 13;
let c = a + b;
//Esto es para saber si un numero es par o impar 
if( c % 2 == 0){
    console.log(" Es par ");
}
else{
    console.log(" Es impar");
}

/*---------------Utilizacion de Mayor y Menor----------------*/
let edad = 20, adulto = 18;

// Esto es para saber si en Mayor o Menor
if(edad >= adulto){
    console.log("Es Mayor");
}else{
    console.log("Es menor");
}

/*---------------Utilizacopn del AND(&&)----------- */
let e = 5;
let valMin = 0, valMax = 10;

//Con AND(&&)se tienen que cumplir las dos condiciones para que funcione
if( a >= valMin && a <= valMax ){
    console.log("Esta en rango");
}else{
    console.log("no esta en rango");
}

/*---------Utilizacion de OR( || )-------------- */
let vacaciones = true, diaDescanso = false;

//Con OR(||)se tienen que cumplir una de las dos  condiciones para que funcione
if( vacaciones || diaDescanso ){
    console.log("Asiste");
}else{
    console.log("no asiste");
}

