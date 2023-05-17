// Metodo Get lee la informacion del atributo
// Metodo Set modifica el valor del atributo
//Se acostumbra que las propiedades utilicen gion bajo antes del nombre de la propiedad
class Persona{//Esto es una clase dentro de la clase creamos metodos

    constructor(nombre, apellido, edad){// Esto es un metodo 
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get nombre(){// Esto es un metodo, que lee y retorna lo mismo
        return this._nombre;
    }

    set nombre(nombre){// Esto es un metodo, que modifica lo que ya tenemos 
        this._nombre = nombre;
    }
}
let persona1 = new Persona("Juan", "Perez", 35);
persona1.nombre = 'Carlos Barboza';// Aca se cambia el nombre a traves del metodo Set
console.log(persona1.nombre);