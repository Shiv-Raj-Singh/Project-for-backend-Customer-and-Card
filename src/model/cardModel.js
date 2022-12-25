import { model, Schema } from 'mongoose'

const cardSchema = new Schema({
    cardNumber: {
        type: String,
        required: [true, 'cardNumber is Required !'] ,
        trim : true ,
        min : 3 ,
        match: [/^[A-Za-z0-9\s]{3,20}$/g, 'Firstname have only Alphabate, minlength 3'],
    },
    cardType: {
        type: String,
        uppercase : true ,
        required: [true, 'Card-Type is Required !'] ,
        trim : true ,
        enum : ["REGULAR" , "SPECIAL"],
    },
    customerName: {
        type: String,
        required: [true, 'Customer Name is Required !'],
        trim : true ,
        match: [/^[A-Za-z\s]{3,20}$/g, 'Customer Name have only Alphabate, minlength 3'],
    },
    vision: {
        type: String,
        required: [true, 'vision is Required !'] ,
        trim : true ,
        min : 3 ,
        match: [/^[A-Za-z0-9( ,\)]{3,80}$/g, 'vision Should be Valid !'],
    },
    customerID: {
        type: Schema.Types.ObjectId,
        required: [true, 'CustomerID is Required !'], 
        trim : true ,
        ref : "Customer" ,
        unique: true,
    },
    status: {
        type: String,
        uppercase : true ,
        trim : true ,
        default: "INACTIVE" ,
        enum : ["ACTIVE" , "INACTIVE"],
    },
} , {timestamps : true})

const cardModel = new model('Card' , cardSchema)
export default cardModel
