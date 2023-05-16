let persona  = {
    nombre :'Carlos',
    apellido : 'Perez',
    edad : 25,
    get datosCompletos(){//Get significa obtener en ingles, por lo tanto nos permite acceder alos valores de nuestras propiedades
        return this.nombre + ' ' + this.apellido + ' tiene ' + this.edad + ' años';
    }
}
console.log(persona.datosCompletos);//Cuando accedemos a este metodo ya no hay que usar los parentesis,solo
// poniendo el nombre de la foncion podemos acceder  a nuestro objeto

