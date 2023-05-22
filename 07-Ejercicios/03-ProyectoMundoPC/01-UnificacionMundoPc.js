class DispositivoEntrada{//Clase Padre
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
//Clase hija
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
        return `Raton #${this._idRaton} - ${this._tipoEntrada} - ${this._marca}`;
    }
}
//Clase hija
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
// Clase Independiente
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

class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadora = [];
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarComputadora(computadora){
        this._computadora.push(computadora);

    }
    mostrarOrden(){
        let computadorasOrden = '';
        for(let computadora of this._computadora){
            computadorasOrden += computadora.toString() + '\n';
        }
        console.log( `Orden ${this._idOrden}, Computadora ${computadorasOrden}`);
    }

   
}



let tecclado1 = new Teclado('Bluetooth', 'Dell');
let raton1 = new Raton('USB', 'HP');
let monitor1 = new Monitor('1920x1080', 'Samsung');
let computadora1 = new Computadora('HP EliteBook 840 G7', monitor1, raton1, tecclado1);
let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.mostrarOrden();

console.log(monitor1.toString());
console.log(tecclado1.toString());
console.log(raton1.toString());
console.log(computadora1.toString());

