import mongoose, {Schema} from "mongoose";


const CustomerShema = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},

})


export const Customer = mongoose.model("Customer", CustomerShema)