function Persona(nombre, apellido,email){
    this.nombre = nombre;// En este momento el nombre del parametro es igual al nombre del atributo
    this.apellido = apellido;// Aasi que si vemos this es porque estamos trabajando con las propiedades de nuestro objeto
    this.email = email;
    }
    Persona.prototype.tel = '4700-1403';/* Con Prototype podemos agregar funciones a 
    los objetos sin tener que usar el constructor*/
    
    // Creamos un objeto Persona
    let padre = new Persona('Carlos', 'Barboza', 'michaelq@hotmail');
    console.log(padre);
    
    let madre = new Persona('Cintia', 'Deter', 'cintiad@hotmail');
    console.log(madre);