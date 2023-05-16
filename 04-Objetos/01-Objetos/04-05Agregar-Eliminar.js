let persona  = {
    nombre :'Carlos',
    apellido : 'Perez',
    edad : 25,
    datosCompletos : function(){
        return this.nombre + ' ' + this.apellido + ' tiene ' + this.edad + ' años';
    }
}


//Para Agregar o modificar
persona.tel = '41789924';
console.log(persona);


//Para Eliminar
delete persona.tel;
console.log(persona);
//Para Eliminar Propiedades
delete persona.nombre;
console.log(persona);