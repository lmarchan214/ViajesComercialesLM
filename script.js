import { barcelona, roma, coro, londres } from './ciudades.js'

// obtener objetos del HTML DOM DOCUMENTO OBJECT MODEL
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

// bucle de enlaces para remover el activo para recorrer el iterable que es enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });

        this.classList.add('active')

        let contenido = obtenerContenido(this.textContent)

        tituloElemento.innerHTML = contenido.titulo 
        subtituloElemento.innerHTML = contenido.subtitulo 
        parrafoElemento.innerHTML = contenido.parrafo 
        precioElemento.innerHTML = contenido.precio 


    });


});
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'Coro': coro,
        'Londres': londres

    };
    return contenido[enlace]
}