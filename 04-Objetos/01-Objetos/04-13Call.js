let persona1 = {
    name: "Juan",
    age: 30,
    nombreCompleto: function(){
        return this.name + " tiene " + this.age +" años";
        }
}


let persona2 ={
    name: "Pedro",
    age: 25,
}

/*Aca aplicamos la funcion CALL llamando al metodo persona1.nombreCompleto con los datos de persona2.*/
console.log(persona1.nombreCompleto())

persona1.nombreCompleto.call(persona2);//Aca se aplica el modo Call
console.log(persona1.nombreCompleto.call(persona2));