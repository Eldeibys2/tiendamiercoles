//Creando un arreglo de objetos

let productos = [

{foto: 'img/termo.jpg',nombre:"Termo",precio:20000,descripcion:"Termo de atl nacional",boton:"ver producto"},
{foto:'img/camiseta.jpg',nombre:"Camiseta",precio:150000,descripcion:"Camiseta original atl nacional",boton:"ver producto"},
{foto:'img/gorra.jpg',nombre:"Gorra",precio:75000,descripcion:"Gorra original atl nacional",boton:"ver producto"},
{foto:'img/mameluco.jpg',nombre:"Mameluco",precio:40000,descripcion:"Mameluco original atl nacional",boton:"ver producto"},
{foto:'img/buzo.jpg',nombre:"Buzo",precio:125000,descripcion:"Buzo original atl nacional",boton:"ver producto"},
{foto:'img/cahqueta.jpg',nombre:"Chaqueta",precio:150000,descripcion:"Chaqueta original atl nacional",boton:"ver producto"},
{foto:'img/tapabocas.jpg',nombre:"Tapabocas",precio:11000,descripcion:"Tapabocas original atl nacional",boton:"ver producto"},
{foto:'img/llavero.jpg',nombre:"Llavero",precio:20000,descripcion:"Llavero atl nacional",boton:"ver producto"},
{foto:'img/boligrafo.jpg',nombre:"Boligrafo",precio:6000,descripcion:"Boligrafo atl nacional",boton:"ver producto"},
{foto:'img/poster.jpg',nombre:"Poster",precio:12000,descripcion:"Poster  atl nacional",boton:"ver producto"}

]
//Necesito recorrer un arreglo en js

//1.Creo una variable para almacenar la base sobre la cual voy a pintar 
let fila=document.getElementById("fila")


productos.forEach(function (producto) {
    console.log(producto.foto)
    console.log(producto.nombre)
    console.log(producto.precio)
    console.log(producto.descripcion)
    console.log(producto.boton)
    

    //pintando etiquetas

    //div con la clase col

    let columna =document.createElement("div")
    columna.classList.add("col")

    //div con las clases card h-100
    let tarjeta=document.createElement("div")
    columna.classList.add("card")
    columna.classList.add("h-100")
    
    //img con la clase card-img-top
    let foto=document.createElement("img")
    foto.classList.add("card-img-top")
    foto.classList.add("h-100")
    foto.src=producto.foto

    //h4 con la clase text center
    let titulo=document.createElement("h2")
    titulo.classList.add("text-center")
    titulo.textContent=producto.nombre

    //h3 con la clase text center y text success
    let precios = document.createElement("h3")
    precios.classList.add("text-center")
    precios.classList.add("text-success")
    precios.textContent=producto.precio

    //h2 con la clase text center
    let desc = document.createElement("h4")
    desc.classList.add("text-center")
    desc.textContent=producto.descripcion

    //button con la clase  btn btn-secondary
   let boton =document.createElement("button")
   boton.classList.add("btn","btn-secondary")

   boton.textContent=producto.boton
    

    //3.Padres e hijos
    
    tarjeta.appendChild(foto)
    tarjeta.appendChild(titulo)
    tarjeta.appendChild(precios)
    tarjeta.appendChild(desc)
    tarjeta.appendChild(boton)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
    


})




