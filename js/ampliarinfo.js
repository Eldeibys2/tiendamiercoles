export  function ampliarInformacionProducto(evento) {

        let producto={}

        //lleno la información del producto 
        producto.foto=evento.target.parentElement.querySelector("img").src
        producto.nombre=evento.target.parentElement.querySelector("h2").textContent
        producto.precio=evento.target.parentElement.querySelector("h3").textContent
        producto.descripcion=evento.target.parentElement.querySelector("h4").textContent
 


        let fotoinfo=document.getElementById("fotoinfo")
        fotoinfo.src=evento.target.parentElement.querySelector("img").src

        let tituloinfo=document.getElementById("tituloinfo")
        tituloinfo.textContent=evento.target.parentElement.querySelector("h2").textContent

       let precioinfo=document.getElementById("precioinfo")
       precioinfo.textContent=evento.target.parentElement.querySelector("h3").textContent

       let descripcioninfo = document.getElementById("descripcioninfo")
       descripcioninfo.textContent = evento.target.parentElement.querySelector("h4").textContent

        //devolver el producto generado

        return producto



    }

     




