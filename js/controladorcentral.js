import {llenartienda} from './llenadoTienda.js'
import {ampliarInformacionProducto} from './ampliarinfo.js'


//creo un producto vacio
let producto = {}

//llamando a tienda llenado

llenartienda()

//rutina para ampliar infromacion
let filaConte = document.getElementById("fila")

filaConte.addEventListener("click",function(evento){
    if(evento.target.classList.contains("btn")){
        let modalinfo = new bootstrap.Modal(document.getElementById('modalinfo'))

        producto = ampliarInformacionProducto(evento)
        console.log(producto)
        modalinfo.show()

    }
})

//rutina para añadir un producto al carrito de compras
let carrito=[]

let botonAgregarCarrito = document.getElementById("botonadd")

botonAgregarCarrito.addEventListener("click",function () {

    carrito.push(producto)
    console.log(carrito)
    
})