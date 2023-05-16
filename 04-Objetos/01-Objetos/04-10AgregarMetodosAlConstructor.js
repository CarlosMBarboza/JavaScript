/*Los cambios que agamos directamente sobre una variable Ej: padre (afecta a padre solamente) */
/* Funcion constructor === Todo lo que pongamos en la funcion constructor va acer heredado por los objetos,
van a recibir las mismas caracteristicas y metodos  */

function Persona(nombre, apellido,email){// Funcion constructor
    this.nombre = nombre;// En este momento el nombre del parametro es igual al nombre del atributo
    this.apellido = apellido;// Aasi que si vemos this es porque estamos trabajando con las propiedades de nuestro objeto
    this.email = email;
    this.nombreCompleto = function(){// Aca se modifica todos los objetos creados, siguientes objetos se ajustan al cambio  
        return this.nombre + " " + this.apellido;
    }
    }
    
    // Creamos un objeto Persona
    let padre = new Persona('Carlos', 'Barboza', 'michaelq@hotmail');
    console.log(padre);
    console.log(padre.nombreCompleto());//Aca se realizo la modificacion yb el ajuste 

    padre.nombre = 'juan';// Cambio de nombre que solo afecta a padre
    
    let madre = new Persona('Cintia', 'Deter', 'cintiad@hotmail');
    console.log(madre);
    console.log(madre.nombreCompleto());