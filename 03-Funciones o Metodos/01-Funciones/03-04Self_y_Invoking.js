//Es una funcion que se puede llamar a si misma, pero no es re-utilizable
let sumar = function (a,b) {return a+b};

resultado = sumar(2,4);
console.log(resultado);


(function (a, b){
    console.log('Ejecuta la funcion :' +  a + b );
})( 1 + 2);