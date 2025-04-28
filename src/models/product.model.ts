import mongoose, { Schema } from "mongoose";



const ProductSchemma = new Schema({
    productName: { type: String, required: true },
    productPrice:  { type: Number, required: true }
})




export const Product = mongoose.model("Product", ProductSchemma)