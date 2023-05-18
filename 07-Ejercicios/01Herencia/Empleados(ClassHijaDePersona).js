class Empleado extends Persona{

    static contadorEmpleados = 0;

    constructor(sueldo, nombre, apellido, edad){
        super(nombre, apellido, edad);
        this.sueldo = sueldo;
        this.idEmpleados = ++Empleado.contadorEmpleados;
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
