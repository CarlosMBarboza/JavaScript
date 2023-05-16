/*---Conversion de un String a numero con la palabra reservada (Number)--------- */
let miNumero = "10";

let edad = Number(miNumero);
if(edad >= 18){
    console.log("Eres mayor de edad");
}else{
    console.log("Eres menor de edad");
}

let resultado = (edad >= 18) ? "vota": "no vota";
console.log(resultado);