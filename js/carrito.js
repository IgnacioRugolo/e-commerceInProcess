const botonAgregarAlCarro = document.querySelectorAll('.botonComprar')
const carritoProducto = document.querySelector('.carrito')

function agregarLosItemAlCarro(tituloProducto, precioProducto, imgProducto){
const productoCarrito = document.createElement ('div')
productoCarrito.innerHTML = `<div class="divProductoEnCarrito">
<img src=${imgProducto} alt="" class="imgProductoEnCarrito">
<div class="textoEnCarrito">
<h5 class="nombreProductoEnCarrito">${tituloProducto}</h5>
<h6 class="precioProductoEnCarrito">${precioProducto}</h6>
</div>
</div>`

carritoProducto.append(productoCarrito)
}

botonAgregarAlCarro.forEach(agregarProducto => {
    agregarProducto.addEventListener('click' , function (event){
const boton = event.target;
const primerProducto = boton.parentElement

const tituloProducto = primerProducto.querySelector('.tituloProducto').textContent
const precioProducto = primerProducto.querySelector('.precio').textContent
const cantidadProducto = primerProducto.querySelector('.cantidad').value
const imgProducto = primerProducto.querySelector('.imgProducto').src
agregarLosItemAlCarro(tituloProducto, precioProducto, cantidadProducto, imgProducto  )
    })
})


