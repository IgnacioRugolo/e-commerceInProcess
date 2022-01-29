const tresBarras = document.querySelector('.menuLinea--bars')
const menu = document.querySelector('.menuLinea')
const menuActivo = document.querySelector('.menuActivo')
const menuLineaActivo = document.querySelector('.menuClose')
const logo = document.querySelector('.logo')
/*
document.body.addEventListener('mouseover',function(){
    menuActivo.setAttribute('style','display:none;')
})*/

tresBarras.addEventListener('click', function(){
 menuActivo.classList.toggle('disabled');
 menuActivo.setAttribute('style', 'display:block')
menu.setAttribute('style', 'display:none;');

})

menuLineaActivo.addEventListener('click', function(){
    menuActivo.classList.toggle('disabled');
    menu.setAttribute('style', 'display:flex;')
  
})