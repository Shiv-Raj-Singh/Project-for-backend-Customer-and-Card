import { isValidObjectId } from 'mongoose'
import AppError, { SucResponse } from '../middleware/appErrorClass.js'
import customerModel from '../model/customerModel.js'
import catchAsync from './catchController.js'

export const createCustomer = catchAsync(async(req,res,next)=>{
    if(Object.keys(req.body).length < 1) return next(new AppError('Please Enter Customer Details !' , 400))
    const data = await customerModel.create(req.body)
    res.status(201).json(new SucResponse('Customer Created Succesfully !' , data))
})


export const getCustomers = catchAsync(async(req,res,next)=>{
    const customers = await customerModel.find({status : "ACTIVE"})
    if(customers.length == 0) return next(new AppError('No Such Customers Found !' , 404))
    res.status(200).json( new SucResponse('Customers Found Succesfully ' , customers))
})


export const deleteCustomer = catchAsync(async(req,res,next)=>{
    if(!isValidObjectId(req.params.customerId))  return  next(new AppError(`Invalid Customer Id ${req.params.customerId} !`, 404))
    const data = await customerModel.deleteOne({_id : req.params.customerId })  
    if(data.deletedCount == 0) return next(new AppError(`No Such Customer For Delete !` , 404))
    res.status(204).send()
})

