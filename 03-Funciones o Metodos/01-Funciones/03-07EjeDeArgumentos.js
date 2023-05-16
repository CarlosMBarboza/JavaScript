let resultado = sumarTodo(5, 4, 13, 10, 9);
console.log(resultado);

function sumarTodo(){//Aca se ejecuta la funcion del for 
    let sumar = 0;// Aca se inisializa 
    for (let i = 0; i < arguments.length; i++){
        sumar += arguments[i];
    }
    return sumar;
}