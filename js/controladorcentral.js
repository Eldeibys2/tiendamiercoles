import {llenartienda} from './llenadoTienda.js'
import {ampliarInformacionProducto} from './ampliarinfo.js'


//creo un producto vacio
let producto = {}

//llamando a tienda llenado

llenartienda()
//referencia al modal
let modalinfo = new bootstrap.Modal(document.getElementById('modalinfo'))
let modalcompra = new bootstrap.Modal(document.getElementById('resumencompra'))
//rutina para ampliar infromacion
let filaConte = document.getElementById("fila")

filaConte.addEventListener("click",function(evento){
    if(evento.target.classList.contains("btn")){
     

        producto = ampliarInformacionProducto(evento)
        console.log(producto)
        modalinfo.show()

    }
})

//rutina para añadir un producto al carrito de compras
let carrito=[]

let botonAgregarCarrito = document.getElementById("botonadd")

let botonclear= document.getElementById("botonclear")



//rutina para ver el carrito

let botonvercarrito = document.getElementById("vercarrito")


botonvercarrito.addEventListener("click",function(){
    let basecarro=document.getElementById("basecarro")
    basecarro.innerHTML=""

    carrito.forEach(function(producto) {
        let fila = document.createElement("div")
        fila.classList.add("row")

        let columna1=document.createElement("div")
        columna1.classList.add("col-4")

        let columna2=document.createElement("div")
        columna1.classList.add("col-8")

        let foto = document.createElement("img")
        foto.classList.add("w-100","img-fluid")
        foto.src=producto.foto


        //padre e hijos
        columna1.appendChild(foto)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        basecarro.appendChild(fila)

    })


    modalcompra.show()
})






botonclear.addEventListener("click",function(){
    carrito=[]
    let capsula=document.getElementById("capsula")
    capsula.classList.add("invisible")
})


botonAgregarCarrito.addEventListener("click",function () {
    //debo capturar la cantidad y agregarla al producto
    let cantidad = document.getElementById("cantidadproducto").value

    producto.cantidad=cantidad

   
    
      //agrego el producto al carrito 
    carrito.push(producto)
     let suma = 0   
     //Pintar la capsula en el carrito
     carrito.forEach(function (producto) {
         suma=suma+Number(producto.cantidad)
     })
     console.log(suma)
    let capsula=document.getElementById("capsula")
    capsula.textContent=suma
    capsula.classList.remove("invisible")
    console.log(carrito)
    modalinfo.hide()
    
})