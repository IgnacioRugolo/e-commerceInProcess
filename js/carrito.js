const botonAgregarAlCarro = document.querySelectorAll('.botonComprar')
const carritoProducto = document.querySelector('.carrito')
const carrito2= document.querySelector('.carrito2')

botonAgregarAlCarro.forEach(agregarProducto => {
    agregarProducto.addEventListener('click' , function (event){
const boton = event.target;
const primerProducto = boton.parentElement

const tituloProducto = primerProducto.querySelector('.tituloProducto').textContent
const precioProducto = primerProducto.querySelector('.precio').textContent
const imgProducto = primerProducto.querySelector('.imgProducto').src
const cantidadProducto = +primerProducto.querySelector('.cantidad').value

agregarLosItemAlCarro(tituloProducto, precioProducto, imgProducto, cantidadProducto )


    })

})






function agregarLosItemAlCarro(tituloProducto, precioProducto, imgProducto, cantidadProducto){

const duplicado= carritoProducto.getElementsByClassName('nombreProductoEnCarrito');

for(let i = 0; i < duplicado.length ;  i++){
    if(duplicado[i].innerText === tituloProducto){
   let cantidadSumada= duplicado[i].parentElement.parenElement.querySelector('.cantidadProducto');
     cantidadSumada.value++;
     return;
    }
    
}

const productoCarrito = document.createElement ('div')
productoCarrito.innerHTML = `<div class="divProductoEnCarrito">
<img src= ${imgProducto} alt="" class="imgProductoEnCarrito">
<div class="textoEnCarrito">
<h5 class="nombreProductoEnCarrito">${tituloProducto}</h5>
<div class=" juntePrecioCantidad">
<h6 class="precioProductoEnCarrito">${precioProducto}</h6>
<h6 class= "cantidadProducto" type="number">KG: ${cantidadProducto}</h6>
</div>
<button class="eliminacionProducto">X</button>
</div>
</div>`

carritoProducto.append(productoCarrito)

actualizadorDePrecios()
productoCarrito.querySelector('.eliminacionProducto').addEventListener('click', function(event){
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
<p>Total:</p>
<p class="precioTotal">$${total},00</p>`

carritoProducto.append(precioTotal)
const botonFinalizarPedido= document.querySelector('.finalizarCompra--boton')
botonFinalizarPedido.addEventListener('click' , function(){
    carritoProducto.innerHTML= ""
    actualizadorDePrecios();
})

}

