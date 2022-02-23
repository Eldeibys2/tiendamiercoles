//controlando etiquetas

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