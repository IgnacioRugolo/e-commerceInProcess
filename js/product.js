export class product { 
    constructor (id, image, nameProduct, price, quantity ){
this.id=id; 
        this.image = image; 
        this.nameProduct = nameProduct
        this.price = price
        this.quantity = quantity 
    }

    getId(){
        return this.id
    }
    getImage(){
        return this.image
    }
    getNameProduct(){
return this.nameProduct
    }

    getPrice(){
        return this.price
    }

    getQuantity(){ 
        return this.quantity
    }
}