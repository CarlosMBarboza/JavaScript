/* los Array se declaran con ( CONST )  lo fija en memoria */
// los valores   0      1       2       4  siempre empiezan en 0 
const auto = ['bmw', 'ford', 'volvo','fiat'];
console.log(auto);

// De esta manera podemos axeder a los objetos de el array de a uno
console.log(auto[3]);


//Para poder axeder a todos los objetos del array de una ves

for ( let i = 0; i <= auto.length; i++){// la palabra length nos dice el largo de nuestro array
    console.log( i + ':' + auto[i]);
}