class Cliente extends Persona{

    static contadorCliente = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this.fechaRegistro = fechaRegistro;
        this.idCliente = ++Cliente.contadorCliente;
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