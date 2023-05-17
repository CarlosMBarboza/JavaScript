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
    static saludar(){
        console.log("Hola mundo te saludo desde el metodo Static");
    }
    static saludar2(persona1){
        console.log(persona1.nombre);
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

//no se puede llamar un metodo static desde un objeto
Persona.saludar();
Persona.saludar2(persona1);

// Se hereda desde el padre
Empleado.saludar();
Empleado.saludar2(persona1);