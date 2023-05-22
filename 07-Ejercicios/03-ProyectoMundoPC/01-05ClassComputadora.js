class Computadora{
    static contadorComputadora = 0;

    constructor(nombre, monitor, raton, teclado){
        this._idComputadora = ++Computadora.contadorComputadora;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }
    toString(){
        return `Computadora #${this._idComputadora} - ${this._nombre} - 
        ${this._monitor.toString()} - ${this._raton.toString()} - ${this._teclado.toString()}`;
    }
}