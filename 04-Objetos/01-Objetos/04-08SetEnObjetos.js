
let persona  = {
    nombre :'Carlos',
    apellido : 'Perez',
    edad : 25,
    idioma : 'ES',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){// Los metodos set los vamos a utilizar para modificar los valores de los atributos de nuestro objeto
    this.idioma = lang.toUpperCase();
    },
    get datosCompletos(){
        return this.nombre + ' ' + this.apellido + ' tiene ' + this.edad + ' años';
    }
}
console.log(persona.lang);
console.log(persona.datosCompletos);
persona.lang = 'en';//El metodo lang llama al get
console.log(persona.lang);