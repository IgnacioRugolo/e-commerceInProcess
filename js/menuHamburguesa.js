const menu = document.querySelector('.menuLinea--bars')
const menuActivo = document.querySelector('.menuActivo')
const menuLineaActivo = document.querySelector('.menuLineaActivo')
const logo = document.querySelector('.logo')

 


menu.addEventListener('click', function(){
    
menu.classList.toggle('disabled')
if(menu.classList == 'menuLinea--bars disabled' ){
    menu.setAttribute('style', 'display:none;')
    menuActivo.setAttribute('style', 'display:block;')
    menuLineaActivo.setAttribute('style', 'display:block;')
logo.setAttribute('style', 'display:none;')
}
menuLineaActivo.classList.remove('disabled')

})


menuLineaActivo.addEventListener('click', function(){

    menuLineaActivo.classList.toggle('disabled')
    if(menuLineaActivo.classList == 'menuLineaActivo disabled'){
        menuLineaActivo.setAttribute('style', 'display:none;')
        menuActivo.setAttribute('style', 'display:none;')
        menu.setAttribute('style', 'display:block;')
        logo.setAttribute('style', 'display:block;')
    }
    menu.classList.remove('disabled')
    
})