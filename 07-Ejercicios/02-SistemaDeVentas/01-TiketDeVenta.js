class Producto{
    static contadorProducto = 0;

    constructor(nombre, precio){
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++Producto.contadorProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }
    get idProducto(){
        return this._idProducto;
    }
    toString(){// esto se llama template
        return `idProducto: ${this._idProducto} nombre: ${this._nombre} precio: ${this._precio}`;
    }

}
/*================================ Otra Clase ==================================================*/

class Orden{
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){//Creacion de una constante que es un metodo
        return 5;// Esto es cantidad de producto
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];// Inisializamos el arreglo en vasio
    }
    get idOrden(){
        return this._idOrden;
    }
    
   agregarProducto(){
    if(this._productos.length < Orden.MAX_PRODUCTOS){
        this._productos.push(Producto);
    }
    else{
        console.log('No hay espacio en la orden');
   }
    }
    calcularTotal(){
        let totalVenta= 0;
        /*Cuando trabajamos con arreglos 1-declaramos la variable que va a interar cada uno de los elementos del
        arreglo posteriormente con la palabre OF indicamos cual es el arreglo que vamos a recorrer de manera automatica */
        for(let producto of this._productos){ 
            totalVenta += producto.precio;//Almacena los precios de cada producto de nuestro arreglo
        }
        return totalVenta;
    }
    mostrarOrden(){
        let productosOrden = '';
        for(let producto of this._productos){
            productosOrden += producto.toString() + '\n';
        }
        console.log(`Orden: ${this._idOrden} Total: ${this.calcularTotal}, Productos: ${productosOrden}`);
    }
}


let producto1 = new Producto('Pantalon', 200);
let producto2 = new Producto('Camiseta', 500);

let orden1 = new Orden();
orden1.agregarProducto