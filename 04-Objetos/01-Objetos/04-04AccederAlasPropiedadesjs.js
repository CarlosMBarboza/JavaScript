let persona  = {
    nombre :'Carlos',
    apellido : 'Perez',
    edad : 25,
    datosCompletos : function(){
        return this.nombre + ' ' + this.apellido + ' tiene ' + this.edad + ' años';
    }
}
console.log(persona.datosCompletos());
console.log(persona['apellido'])

//para recorer cada una de las propiedades de nuestro Objeto usamos un for in

for(propiedad in persona){
    console.log(propiedad);// aca accedemos a las propiedades del objeto
    console.log(persona[propiedad]);//Aca accedemos a las propiedades del objeto
}