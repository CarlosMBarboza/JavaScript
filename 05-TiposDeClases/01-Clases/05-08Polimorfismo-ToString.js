//Prototype : Nos permite agregar atributos o metodos de manera dinamica a nuestras clases


class Persona{// Esto es la clase padre 
    constructor(nombre, apellido){// Esto es un metodo 
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){// Esto es un metodo, que lee y retorna lo mismo
        return this._nombre;
    }

    set nombre(nombre){// Esto es un metodo, que modifica lo que ya tenemos 
        this._nombre = nombre;
    }
    get apellido(){// Esto es un metodo, que lee y retorna lo mismo
        return this._apellido;
    }

    set apellido(nombre){// Esto es un metodo, que modifica lo que ya tenemos 
        this._apellido = apellido;
    }
    nombreCompleto(){// sin parametros y se hereda 
        return this._nombre + " y su apellido es  " + this._apellido;
    }
    toSting(){// Se declara en la clase padre (object)
        return this.nombreCompleto();/* Se aplica polimorfismo( multiples formas en tiempo de ejecucion)
        El metod que se ejecuta depende si es una referencia de tipo padre o de tipo hijo */
    }
}

class Empleado extends Persona{// Esto es la clase hija que herada los atributos del padre
    constructor(nombre,apellido, departamento){
        super(nombre,apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    nombreCompleto(){// Sobreescritura
        return super.nombreCompleto() + " y es empleada de " + this._departamento;
    }
}   

let persona1 = new Persona('Carlos', 'Barboza');// Referencia de tipo padre
console.log(persona1);

let empleado1 = new Empleado('cintia','Deter','Administracion');// Referencia de tipo hijo
console.log(empleado1.nombreCompleto());
console.log(empleado1.toSting());