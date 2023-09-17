import {addProduct,calcStock,products} from  './producto.services'


addProduct({
    title: "Pro 1",
    createAt: new Date,
    stock: 12,
    size: "M"});


addProduct({
    title: "Pro 1",
    createAt: new Date,
    stock: 10,
    size: "M"});

console.log(products)

console.log("stock",calcStock())