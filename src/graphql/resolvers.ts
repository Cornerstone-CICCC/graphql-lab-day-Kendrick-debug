import customerController from "../controllers/customer.controller"
import orderController from "../controllers/order.controller"
import productController from "../controllers/product.controller"
import { ICustomer } from "../types/customer"
import { IProduct } from "../types/product"
import { IOrders } from "../types/order"

// Finish the resolvers
export const resolvers = {
  Query: {
    products: async() => {
      return await productController.getProducts()
    },


    customers: async () => {
      return await customerController.getCustomers()
    },



    orders: async () => {
      return await orderController.getOrders()
    },



    getProductById: async (_: unknown, {id}: {id: string}) => {
      return await productController.getProductById(id)
    },
    getCustomerById: async (_: unknown, {id}: {id: string}) => {
      return await customerController.getCustomerById(id)
    },
  },



  Product: {
    customers: async   (parent: {id: string}) => {
      const costumers = await customerController.getCustomers()
      const orders = await orderController.getOrders()
      const productOrder = orders.filter(o => String(o.productId) === parent.id)
      const customerProduct = productOrder.map((product) => {
        return costumers.find(c => String(c._id) === String(product.customerId))
      })

      
      return customerProduct
 
    }
  },


  Customer: {
    products: async (parent: {id: string}) => {
      const products = await productController.getProducts()
      const orders = await orderController.getOrders()
      const customerOrder = orders.filter(o => String(o.customerId) === parent.id)
      const customerProduct = customerOrder.map((customer) => {
        return products.find(c => String(c._id) === String(customer.productId))
      })
      
      return customerProduct
    }
  },



  Order: {
    product: async  (parent: { productId: string }) => {
      return await productController.getProductById(parent.productId)
    },



    customer: async (parent: { customerId: string }) => {
      return  await customerController.getCustomerById(parent.customerId)
    }
    
  },


  Mutation: {
    addProduct: async (_: unknown, { productName, productPrice }: Omit<IProduct, 'id'>) => {
      return await productController.createProduct({ productName, productPrice })
    },



    editProduct:  async (_: unknown, { id, productName, productPrice }: IProduct) => {
      return await productController.updateProduct(id, { productName, productPrice })
    },


    removeProduct:  async (_: unknown, { id }: {id: string}) => {
      return await productController.deleteProduct(id)
    },

    addCustomer:  async (_: unknown, { firstName, lastName, email }: Omit<ICustomer, 'id'>) => {
      return await customerController.createCustomer({ firstName, lastName, email })
    },



    editCustomer: async (_: unknown, { id, firstName, lastName, email }: ICustomer) => {
      return await customerController.updateCustomer(id, { firstName, lastName, email })
    },



    removeCustomer: async (_: unknown, { id }: {id: string}) => {
      return await customerController.deleteCustomer(id)
    },



    addOrder: async (_: unknown, { productId, customerId }: Omit<IOrders, 'id'>) => {
      return await orderController.createOrder({ productId, customerId })
    },


    editOrder: async (_: unknown, { id, productId, customerId }: IOrders) => {
      return await orderController.updateOrder(id, { productId, customerId })
    },

    removeOrder: async (_: unknown, { id }: {id: string}) => {
      return await orderController.deleteOrder(id)
    },
  }
}
