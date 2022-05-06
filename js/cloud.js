export class cloud{ 

    constructor(lista){
        this.lista= JSON.parse(localStorage.getItem('clouds', lista)) || []; }
   

    findAllProduct(){
        return this.lista
    }



    createProduct(product){
this.lista.push(product)
localStorage.setItem('clouds', JSON.stringify( this.lista));
    }



    findByProductTitle(productId){
const product = this.lista.find(articulo => articulo.id === productId)

if(!product){
    console.log('No existe ese producto aún en esta web.')

return product 
    }

}

duplicate(){

}





deleteProduct(productId){
   const product = this.findByProductTitle(productId)   
const index = this.lista.indexOf(product) 
this.lista.splice(index, 1)
localStorage.setItem('clouds', JSON.stringify(this.lista));

    }









}