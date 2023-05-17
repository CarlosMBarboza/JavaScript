/*La herancia es la reutilizacion del codigo y bpoder heredar caracteristica
desde una clase padre hacia una clase hija*/

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
}

class Empleado extends Persona{// Esto es la clase hija que herada los atributos del padre
    constructor(departamento,nombre,apellido){
        super(nombre,apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
}   

let persona1 = new Persona('Carlos', 'Barboza');
console.log(persona1);

let empleado1 = new Empleado('cintia','Deter','Administracion');
console.log(empleado1);