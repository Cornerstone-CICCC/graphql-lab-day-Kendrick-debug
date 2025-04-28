import {Customer} from '../models/customer.model'
import {ICustomer} from '../types/customer'


//Get all customers
const getCustomers = async () => {
    const customers = await Customer.find()
    return customers
}

//get customer by id
const getCustomerById = async (id: string) => {
    return await Customer.findById(id)
}


//create customer
const createCustomer = async (data: Omit<ICustomer, 'id'>) => {
    const newCustomer = new Customer(data)
    return await newCustomer.save()
}



//update customer
const updateCustomer = async (id: string, data: Partial<ICustomer>) => {
    return await Customer.findByIdAndUpdate(id, data, { new: true })
}




//delete customer by id
const deleteCustomer = async (id: string) => {
    return await Customer.findByIdAndDelete(id)
}

export default {
    getCustomers,
    createCustomer,
    getCustomerById,
    updateCustomer,
    deleteCustomer,
}