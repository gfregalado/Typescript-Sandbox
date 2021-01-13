import "reflect-metadata"
import {plainToClass} from "class-transformer"

import { Product } from "./product.model"

const products = [{title:"A Carpet", price: 29.99}, {title:"A Carpet 2", price: 39.99}]
//const p1 = new Product('A book', 12.99)

/* const loadedProducts = products.map(prod => {
    return new Product(prod.title, prod.price);
})
 */

 const loadedProducts = plainToClass(Product, products)


for (const prod of loadedProducts){
    console.log(prod.getInformation())
}