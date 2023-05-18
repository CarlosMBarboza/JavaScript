class Persona{// Esto es la clase padre 
        /*La variable que creamos de tipo static la tenemos que acceder  por medio de nuestra clase Ej:( Persona.contadorObjetoPersona)
         os atributos Static  se asician con nuetra plantilla, con nuetra clase */
        static contadorPersona = 0;// atributos de clase
        constructor(nombre, apellido){// Esto es un metodo 
            this._nombre = nombre;
            this._apellido = apellido;
            this.idPersona =  Persona.contadorPersona++;// Le asignamos un id caves que creamos una persona
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
            return this.idPersona + " " + this.nombre + " " + this.apellido
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
    console.log(persona1.toSting());
    let empleado1 = new Empleado('cintia','Deter','Administracion');// Referencia de tipo hijo
    console.log(empleado1.toSting());
