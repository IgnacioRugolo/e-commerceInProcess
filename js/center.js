import {cloud} from "./cloud.js";
import {product} from "./product.js";
import productList  from "./listProduct.js";

const arrayCloud = new cloud ([]) 
 

//----Renderizado de productos para HTML MAIN. 


const divProducts = document.getElementById('divProducts')
const oneProduct = document.createElement('div')
const twoProduct = document.createElement('div')

//RENDER PRODUCTO 1 

oneProduct.innerHTML =` <div class="primerProducto" id="oneProduct">
   
     <img class="imgProducto" id="imgProductOne" src=${productList[0].imgURL} alt="Zanahorias.">

       <h2 class="tituloProducto" id="titleProductOne">${productList[0].name}</h2>

        <div class="primerProducto--precioCantidad">

        <p class="precio" id="priceProductOne">${productList[0].price}</p>

        <p class="symbolCash" id="symbolCashOne">$</p>
        <p class='cantidad' id='quantityProductOne'>${productList[0].quantity}</p> <p>Cantidad por KG: </p> 
        </div>

  <button  class="botonComprar" id="buttonBuy">AGREGAR AL CARRO</button>

  <input class='id' type="hidden" id='idProductOne' name="id" value=${productList[0].id}>
    </div>
`

divProducts.appendChild(oneProduct)

twoProduct.innerHTML= ` <div class="primerProducto" id="twoProduct">
   
<img class="imgProducto" id="imgProductTwo" src=${productList[1].imgURL} alt="Papa Blanca.">
  <h2 class="tituloProducto" id="titleProductOne">${productList[1].name}</h2>

   <div class="primerProducto--precioCantidad">

   <p class="precio" id="priceProductTwo">${productList[1].price}</p>

   <p class="symbolCash" id="symbolCashTwo">$</p>
   <p class='cantidad' id='quantityProductTwo'>${productList[1].quantity}</p> <p>Cantidad por KG: </p> 
   </div>

<button  class="botonComprar" id="buttonBuy">AGREGAR AL CARRO</button>

<input class='id' id='idProductTwo' type="hidden" name="id" value=${productList[1].id}>

</div>
`

divProducts.appendChild(twoProduct)










// variables, constantes globales para js. 



const cart = document.querySelector('#cart')
const buttonAddToCart = document.querySelectorAll('#buttonBuy')



buttonAddToCart.forEach(buttonPath =>{
  
    buttonPath.addEventListener('click', function(e){

const button = e.target 
const divParentButton = button.parentElement 

const id = +divParentButton.getElementsByClassName('id').item(0, 1).value
const image = divParentButton.getElementsByClassName('imgProducto').item(0, 1 ).src
const nameProduct = divParentButton.getElementsByClassName('tituloProducto').item(0, 1).textContent
const price = +divParentButton.getElementsByClassName('precio').item(0, 1).textContent
const quantity = +divParentButton.getElementsByClassName('cantidad').item(0, 1).textContent





const newProduct = new product(id, image, nameProduct, price, quantity)



arrayCloud.createProduct(newProduct)


if(arrayCloud.hasOwnProperty(newProduct.id)){
    newProduct.quantity = arrayCloud[newProduct.id].quantity + 1
}
arrayCloud[newProduct.id] = {...newProduct}

console.log(arrayCloud);
console.log(newProduct);
//En render se ejecuta todo(delete, actualizador de precio y renderizado).
renderToCart(id, image, nameProduct, price, quantity)


})
    })



function renderToCart(id, image, nameProduct, price, quantity){
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

<input class='id' id='idProduct' type="hidden" name="id" value=${id}>

</div>
</div>`

//console.log();

cart.append(newDiv)



buttonDeleteInCart()
actualizadorDePrecios()
}





//Function delete in cart and localStorage. 

function buttonDeleteInCart(){
    const deleteProdu= document.querySelectorAll('#deleteProduct')
    deleteProdu.forEach(deleteProduRed =>{
    
deleteProduRed.addEventListener('click', function (event){
const buttonPush = event.target; 

buttonPush.closest('.divProductoEnCarrito').remove()
const id = document.getElementsByClassName('id').value

arrayCloud.deleteProduct(id)

actualizadorDePrecios()
 })
}

)}





// actualizador de precios 


function actualizadorDePrecios(){
    let total = 0 
    const priceTotal = document.querySelector('#finalizeBuy')
    const productInCart = document.querySelectorAll('#divProductInCart')
    
    productInCart.forEach(divProductInCart => {
       const precioDeLosProductos =  divProductInCart.querySelector('#priceProductInCart');
    const textoPrecioProducto = +precioDeLosProductos.textContent.replace('$', '')
    
    const cantidadDeLosProductos= divProductInCart.querySelector("#quantityProduct")
    
    const cantProdu = +cantidadDeLosProductos.textContent.replace('KG:', '')
    total = total +  textoPrecioProducto * cantProdu 
    
    
    
    })
    
    priceTotal.innerHTML =  `<button class="finalizarCompra--boton">Finalizar Compra</button> 
    
    <p class="precioTotal">Total: $${total},00</p>`
    
    cart.append(priceTotal)
    
    
}

/*
function duplicateQuantity(id){
   // const cart = document.querySelector('#cart')
   // const idCart = cart.getElementsByClassName('id').item(0,1).textContent
    console.log(idCart);
    if(productList[0].id && productList[1].id && arrayCloud.id === id){
return quantity + 1
    }
}
duplicateQuantity(id)
*/


