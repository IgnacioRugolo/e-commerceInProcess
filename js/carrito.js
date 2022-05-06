const botonAgregarAlCarro = document.querySelectorAll('.botonComprar')
const carritoProducto = document.querySelector('.carrito')


botonAgregarAlCarro.forEach(agregarProducto => {
    agregarProducto.addEventListener('click' , function (event){
const boton = event.target;
const primerProducto = boton.parentElement
c
const tituloProducto = primerProducto.querySelector('.tituloProducto').textContent
const precioProducto = primerProducto.querySelector('.precio').textContent
const imgProducto = primerProducto.querySelector('.imgProducto').src
const cantidadProducto = +primerProducto.querySelector('.cantidad').value


agregarLosItemAlCarroRender(tituloProducto, precioProducto, imgProducto, cantidadProducto )


    })

})



function agregarLosItemAlCarroRender(tituloProducto, precioProducto, imgProducto, cantidadProducto){


const elementoTitulo= carritoProducto.getElementsByClassName('nombreProductoEnCarrito');

for(let i = 0; i < elementoTitulo.length ;  i++){
    if(elementoTitulo[i].innerText === tituloProducto){
   const cantidadSumada = carritoProducto.querySelector('.cantidadProducto')

    
    }
    
}

const productoCarrito = document.createElement ('div')
productoCarrito.innerHTML = `<div class="divProductInCart">
<img src= ${imgProducto} alt="" class="imgProductInCart">
<div class="textInCart">
<h5 class="nameProductInCart">${tituloProducto}</h5>
<div class=" collectPriceQuantity">
<h6 class="priceProductInCart">${precioProducto}</h6>
<p> KG: </p>
<h6 class= "quantityProduct" >${cantidadProducto}</h6>
</div>
<button class="deleteProduct">X</button>
</div>
</div>`


carritoProducto.append(productoCarrito)

actualizadorDePrecios()

const eliminarProdu= productoCarrito.querySelector('.eliminacionProducto')
eliminarProdu.addEventListener('click', function(event){
const botonApretado = event.target; 
botonApretado.closest('.divProductoEnCarrito').remove()
actualizadorDePrecios()
})

}


function actualizadorDePrecios(){
let total = 0 
const precioTotal = document.querySelector('.finalizarCompra')
const productoEnCarrito = document.querySelectorAll('.divProductoEnCarrito')

productoEnCarrito.forEach(divProductoEnCarrito => {
   const precioDeLosProductos =  divProductoEnCarrito.querySelector('.precioProductoEnCarrito');
const textoPrecioProducto = +precioDeLosProductos.textContent.replace('$', '')

const cantidadDeLosProductos= divProductoEnCarrito.querySelector(".cantidadProducto")

const cantProdu = +cantidadDeLosProductos.textContent.replace ('KG:', '')
total = total +  textoPrecioProducto * cantProdu 



})

precioTotal.innerHTML =  `<button class="finalizarCompra--boton">Finalizar Compra</button> 

<p class="precioTotal">Total: $${total},00</p>`

carritoProducto.append(precioTotal)

}

