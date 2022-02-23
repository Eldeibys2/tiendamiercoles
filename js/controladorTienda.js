//controlando etiquetas
/*
//1. Crear una variable para guardar una etiqueta
let etiquetatitulo = document.getElementById("titulo")
console.log(etiquetatitulo)


//2.Como modificar el texto de una etiqueta
etiquetatitulo.textContent="rojo vos no existis"


let etiquetamenu = document.getElementById("atleticonacional")


etiquetamenu.textContent="Nacional"


//conntrolando una foto
let etiquetafoto=document.getElementById("fotonacional")
etiquetafoto.src="img/nacioanl2.png"

//cambiar el estilo de la etiqueta 
etiquetatitulo.classList.add("text-center")
etiquetatitulo.classList.add("text-danger")
*/

//tienda
let productosNombre=["Termo","camiseta nacional"]
let productosPrecio=[20000,150000]
let productosPromocion=[true,false]

console.log(productosNombre)
console.log(productosNombre[1])

//Creando objetos con js

let usuario ={
    
    nombre:"Bruno Diaz",
    edad:48,
    amigos:["gatubela", "mr frio", "el pinguino"]   
}  
console.log(usuario)
console.log(usuario.nombre)
console.log(usuario.amigos)
console.log(usuario.amigos[1])