
export function render(image, nameProduct, price, quantity){
    const cart = document.querySelector('#cart')
const newDiv  = document.createElement('div')
newDiv.innerHTML = `<div class="divProductoEnCarrito" id="divProductInCart">
<img src= ${image} alt="" class="imgProductoEnCarrito">
<div class="textoEnCarrito">
<h5 class="nombreProductoEnCarrito" id ="nameProductInCart">${nameProduct}</h5>
<div class=" collectPriceQuantity">
<h6 class="precioProductoEnCarrito" id= "priceProductInCart">${price}</h6>
<p> KG: </p>
<h6 class= "cantidadProducto" id="quantityProduct">${quantity}</h6>
</div>
<button class="eliminacionProducto" id="deleteProduct">X</button>
</div>
</div>`



cart.append(newDiv)


}
