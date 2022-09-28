import axios from 'axios';
const url = 'http://localhost:3003/products';
const url_cart = 'http://localhost:3003/user-cart';
export async function getProducts() {
    const products = await axios.get(url);
    console.log(products.data);
    
    return products.data;

}
export async function deleteProduct(id){
    const product = await axios.delete(`${url_cart}/`+id);
    console.log(product.data);
}

export async function AddProduct(prod){
    const product = await axios.post(url_cart,prod);
    console.log(product.data);
    return product.data;
}
export async function GetProduct(){
    const product = await axios.get(url_cart);
    console.log(product.data);
    return product.data;
}
export async function EditProduct(prod){
    
    const product = await axios.put(`${url_cart}/`+prod.id,prod);
    console.log(prod);
    return product.data;
}