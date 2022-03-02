let etiquetaBoton = document.getElementById("boton1")

etiquetaBoton.addEventListener("click",cambiarFoto)

function cambiarFoto(){
    let titulo2= document.getElementById("titulo2")
    titulo2.textContent="Buenos días señor"
}

let etiquetaFoto = document.getElementById("foto")

etiquetaFoto.addEventListener("mouseover",cambiarTexto)

function cambiarTexto(){
    let titulo = document.getElementById("titulo")
    titulo.textContent="Hay que ganar nacional"
}