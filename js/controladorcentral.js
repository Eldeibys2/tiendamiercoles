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



let botonclear= document.getElementById("botonclear")
botonclear.addEventListener("click",function(){
    carrito=[]
    let capsula=document.getElementById("capsula")
    capsula.classList.add("invisible")
})


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
        columna2.classList.add("col-8")

        let foto = document.createElement("img")
        foto.classList.add("w-100","img-fluid")
        foto.src=producto.foto
        
        let titulo=document.createElement("h2")
        titulo.classList.add("text-center")
        titulo.textContent=producto.nombre

        let cantidad=document.createElement("h4")
        cantidad.classList.add("text-center")
        cantidad.textContent="Cantidad: "+producto.cantidad

        let precio=document.createElement("h4")
        precio.classList.add("text-center")
        precio.textContent="Precio: $"+producto.precio


        let subtotal=document.createElement("h4")
        subtotal.classList.add("text-center")
        subtotal.textContent="Subtotal: $"+producto.cantidad*producto.precio



        //padre e hijos
        columna1.appendChild(foto)
        columna2.appendChild(titulo)
        columna2.appendChild(cantidad)
        columna2.appendChild(precio)
        columna2.appendChild(subtotal)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        basecarro.appendChild(fila)

    })
    let total=0
    carrito.forEach(function(producto){
        total=total+Number(producto.cantidad*producto.precio)
    })
    
    
    let totalCompra = document.getElementById("total")
    totalCompra.textContent= "Total: $"+total

    modalcompra.show()

    let btndolar=document.getElementById("btndolar")
    btndolar.addEventListener("click",function(){
        
    let pesos = total
    let dolar = pesos/4000
    totalCompra.textContent="Total en dolares: $"+dolar.toFixed(2)
    })



})








let botonAgregarCarrito = document.getElementById("botonadd")
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
    reiniciar()
    
})





function reiniciar(){
    let cantidadProducto = document.getElementById("cantidadproducto")
    cantidadProducto.value="1"
}
