//Creando un arreglo de objetos

let productos = [

{foto: 'img/termo.jpg',nombre:"Termo",precio:20000,descripcion:"Termo de atl nacional"},
{foto:'img/camiseta.jpg',nombre:"Camiseta",precio:150000,descripcion:"Camiseta original atl nacional"},
{foto:'img/gorra.jpg',nombre:"Gorra",precio:75000,descripcion:"Gorra original atl nacional"},
{foto:'img/mameluco.jpg',nombre:"Mameluco",precio:40000,descripcion:"Mameluco original atl nacional"},
{foto:'img/buzo.jpg',nombre:"Buzo",precio:125000,descripcion:"Buzo original atl nacional"},
{foto:'img/cahqueta.jpg',nombre:"Chaqueta",precio:150000,descripcion:"Chaqueta original atl nacional"},
{foto:'img/tapabocas.jpg',nombre:"Tapabocas",precio:11000,descripcion:"Tapabocas original atl nacional"},
{foto:'img/llavero.jpg',nombre:"Llavero",precio:20000,descripcion:"Llavero atl nacional"},
{foto:'img/boligrafo.jpg',nombre:"Boligrafo",precio:6000,descripcion:"Boligrafo atl nacional"},
{foto:'img/poster.jpg',nombre:"Poster",precio:12000,descripcion:"Poster  atl nacional"}

]
//Necesito recorrer un arreglo en js

//1.Creo una variable para almacenar la base sobre la cual voy a pintar 
let fila=document.getElementById("fila")

productos.forEach(function (producto) {
    console.log(producto.nombre)
    console.log(producto.precio)
    console.log(producto.foto)

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
    foto.src=producto.foto

    //h4 con la clase text center
    let titulo=document.createElement("h4")
    titulo.classList.add("text-center")
    titulo.textContent=producto.nombre

    //3.Padres e hijos
    tarjeta.appendChild(foto)
    tarjeta.appendChild(titulo)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
    


})




