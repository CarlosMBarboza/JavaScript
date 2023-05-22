class Monitor {
    static contadorMonitores = 0;
    constructor(tamaño, marca){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._tamaño = tamaño;
        this._marca = marca;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    toString(){
        return `Monitor #${this._idMonitor} - ${this._tamaño} - ${this._marca}`;
    }
}