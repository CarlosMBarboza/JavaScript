class DispositivoEntrada{
    constructor(tipoEntrada, marca){
    this.tipoEntrada = tipoEntrada;
    this.marca = marca;
    }
    get TipoEntrada(){
    return this.tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
    this._tipoEntrada = tipoEntrada;
    }
    get marca(){
    return this.marca;
    }
    set marca(marca){
    this._marca = marca;
    }
}