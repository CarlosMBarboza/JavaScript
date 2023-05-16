// Crear un objeto
const persona = {
    nombre : 'carlos',
    apellido : 'barboza'
}

function cambiarValorObjeto(p1){// Con p1 se realiza el cambio o modificadcion del atributo Nombre
    p1.nombre = 'juan';
    p1.apellido = 'valdes';
}
// Paso por referencia
cambiarValorObjeto(persona);
console.log(persona);

