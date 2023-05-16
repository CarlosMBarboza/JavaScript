const auto = ['bmw', 'ford', 'volvo','fiat'];
console.log(auto);

//La funcion push nos permite agregar nuevos elementos a un array
auto.push('volvo');
console.log(auto);

//La funcion .length nos permite agregar un ultimo elemento  a la lista de array
console.log(auto.length);
auto[auto.length]= 'citroen';
console.log(auto);

//La funcion pop nos permite eliminar el ultimo elemento de un array
console.log(auto.length);
auto.pop();
console.log(auto);