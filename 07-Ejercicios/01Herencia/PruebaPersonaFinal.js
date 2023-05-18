class Persona {

    static contadorPersonas = 0;

    constructor( nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersonas =++Persona.contadorPersonas;
    }
    get idPersonas(){
        return this._idPersonas;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    nombreCompleto(){
        return this._idPersonas + " " + this._nombre + " " +
        this._apellido + "  " + this._edad ;
    }
    toString(){
        return this.nombreCompleto();
    }

}

class Empleado extends Persona{

    static contadorEmpleados = 0;

    constructor( nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this.sueldo = sueldo;
        this.idEmpleado = ++Empleado.contadorEmpleados;
    }
    get idEmpleados(){
        return this._idEmpleados;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return  this.idEmpleados + " " + this.nombreCompleto() + " sueldo: " + this.sueldo;
    }
}


class Cliente extends Persona{

    static contadorCliente = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this.fechaRegistro = fechaRegistro;
        this.idClientes = ++Cliente.contadorClientes;
    }
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }
    toString(){
        return  this.idCliente + " " + this.nombreCompleto() + " fecha registro: " + this.fechaRedistro;
    }
}

//Prueba clase Persona(clase Padre)
let persona1 = new Persona("Juan", "Perez", 35);
console.log(persona1.toString());
let persona2 = new Persona("Pedro", "Gomez", 35);
console.log(persona2.toString());
let persona3 = new Persona("Maria", "Gomez", 35);
console.log(persona3.toString());

//Prueba clase Empleado(clase Hija)
let empleado1 = new Empleado("Juan", "Perez", 35, 7000);
console.log(empleado1.toString());
let empleado2 = new Empleado("Pedro", "Gomez", 35, 5);
console.log(empleado2.toString());


//Prueba clase Cliente(clase Hija)
let cliente1 = new Cliente("Juan", "Perez", '35', new Date());
console.log(cliente1.toString());
let cliente2 = new Cliente("Pedro", "Gomez", 35, 5);
console.log(cliente2.toString());



