const tresBarras = document.querySelector('.menuLinea--bars')
const menu = document.querySelector('.menuLinea')
const menuActivo = document.querySelector('.menuActivo')
const menuLineaActivo = document.querySelector('.menuClose')
const carritoCartera = document.querySelector('.carrito')
const logoCartera = document.querySelector('.cartera')
const carritoClose= document.querySelector('.carritoClose')


menuActivo.setAttribute('style', 'display: none;')

tresBarras.addEventListener('click', function(){
 menuActivo.classList.toggle('disabled');
 menuActivo.setAttribute('style', 'display:block')
menu.setAttribute('style', 'display:none;');

})

menuLineaActivo.addEventListener('click', function(){
    menuActivo.classList.toggle('disabled');
    menu.setAttribute('style', 'display:flex;')
  
})


logoCartera.addEventListener('click', function(){
carritoCartera.setAttribute('style', 'display:block ;')

})

carritoClose.addEventListener('click', function(){
    carritoCartera.setAttribute('style' ,'display:none;')
})