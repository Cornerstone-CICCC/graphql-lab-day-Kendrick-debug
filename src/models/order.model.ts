import mongoose, {Schema} from "mongoose";



const OrderShemna = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },

    customerId: {
        type: Schema.Types.ObjectId,
        ref: 'Customer'
    }
})

export const Order = mongoose.model("order", OrderShemna)