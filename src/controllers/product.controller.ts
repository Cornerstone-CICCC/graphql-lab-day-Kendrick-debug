import { Product } from "../models/product.model";
import { IProduct } from "../types/product";


//Get all Products
const getProducts = async () => {
    const products = await Product.find()
    return products
}



//Create new Producst
const createProduct = async (data: Omit<IProduct, 'id'>) => {
    const newProduct = new Product(data)
    return await newProduct.save()
}



//Get producst By id
const getProductById = async (id: string) => {
    return await Product.findById(id)
}


//update products
const updateProduct = async (id: string, data: Partial<IProduct>) => {
    return await Product.findByIdAndUpdate(id, data, { new: true })
}



//delete producst
const deleteProduct = async (id: string) => {
    return await Product.findByIdAndDelete(id)
}

export default {
    getProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
}