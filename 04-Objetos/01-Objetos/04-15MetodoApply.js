let persona1 = {
    name: "Juan",
    age: 30,
    nombreCompleto: function(titulo, tel){
        return titulo + " " + this.name + " su telefono es " + tel + " y tiene " + this.age + " años" ;
    }     
}


let persona2 ={
    name: "Pedro",
    age: 25,
}

/*Aca aplicamos la funcion CALL llamando al metodo persona1.nombreCompleto con los datos de persona2.*/
console.log(persona1.nombreCompleto('arquitecto', '4710-6589'))

let arreglo =['ingeniero','4710-9865'];//Aca se aplica los cambios del Apply
console.log(persona1.nombreCompleto.apply(persona2, arreglo));