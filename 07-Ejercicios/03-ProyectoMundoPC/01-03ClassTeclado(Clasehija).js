class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;

    constructor(TipoEntrada,marca){
        super(TipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado #${this._idTeclado} - ${this._tipoEntrada} - ${this._marca}`;
    }

}
