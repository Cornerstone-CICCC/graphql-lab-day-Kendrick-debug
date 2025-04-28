import {Order} from '../models/order.model'
import { IOrders } from '../types/order'



//GEt all orders
const getOrders = async() => {
    const orders = await Order.find()
    return orders
}




//create new order
const createOrder = async (data: Omit<IOrders, 'id'>) => {
    const newOrder = new Order(data)
    return await newOrder.save()
}


//Updating orders
const updateOrder = async (id: string, data: Partial<IOrders>) => {
    return await Order.findByIdAndUpdate(id, data, {new: true})
}



//deleting orders
const deleteOrder = async (id: string) => {
    return await Order.findByIdAndDelete(id)
}

export default {
    getOrders,
    createOrder,
    updateOrder,
    deleteOrder
}