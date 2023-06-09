class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;   
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton #${this.idRaton} - ${this.tipoEntrada} - ${this.marca}`;
    }
}