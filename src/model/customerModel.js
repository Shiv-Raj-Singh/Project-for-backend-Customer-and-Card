import { model, Schema } from 'mongoose'

const customerSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'firstName is Required !'] ,
        trim : true ,
        min : 3 ,
        match: [/^[A-Za-z\s]{3,20}$/g, 'Firstname have only Alphabate, minlength 3'],
    },
    lastName: {
        type: String,
        required: [true, 'First-Name is Required !'],
        trim : true ,
        min : 3 ,
        match: [/^[A-Za-z\s]{3,20}$/g, 'Last-name have only Alphabate, minlength 3'],
    },
    mobile: {
        type: String,
        required: [true, 'Mobile Number is Required Should be Indian !'],
        trim : true ,
        match: [ /^[6-9]{1}[0-9]{9}$/g, 'Mobile Number Shoule be Valid Indian Number !']  ,
        unique: true , 
    },
    DOB: {
        type: String,
        required: [true, 'DOB is Required !'] , 
        trim : true , 
        match: [ /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])*$/, 'DOB Shoule be Valid Like YYYY-MM-DD !'],
    },
    email: {
        type: String,
        required: [true, 'email is Required !'], 
        trim : true , 
        match: [/^[a-z0-9_\-\.{1,3}]+[@]{1}[a-z]{1,}(\.co.in|\.com)$/g,, 'E-mail Shoule be Valid !'],
        unique: true
    },
    address: {
        type: String,
        required: [true, 'Address is Required !'] ,
        trim : true ,
        min : 3 ,
        match: [/^[A-Za-z0-9( ,\)]{3,80}$/g, 'Address Should be Valid !'],
    },
    customerID: {
        type: String,
        required: [true, 'CustomerID is Required !'], 
        unique: true,
        trim : true ,
        min : 3 ,
        match: [/^[A-Za-z0-9( ,\)]{3,80}$/g, 'Address Should be Valid !'],
    },
    status: {
        type: String,
        uppercase : true ,
        trim : true ,
        default: "INACTIVE" ,
        enum : ["ACTIVE" , "INACTIVE"],
    },
} , {timestamps : true})

const customerModel = new model('Customer' , customerSchema)
export default customerModel
