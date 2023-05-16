// Funcion tipo flecha
// Esto remplaza a la palabra(function), remplaza las llaves y tambien remplaza (return)


let sumar = function (a, b){return a + b}

resultado = sumar(1, 2);
console.log(resultado);
// Se remplaza por esto
                                //=====Flecha =====
// Esta es la forma mas sencilla de definir una funcion en javascript
const sumarFuncionTipoFlecha = (a, b) => a + b;
resultado = sumarFuncionTipoFlecha(1, 2);
console.log(resultado);