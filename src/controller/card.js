import { isValidObjectId } from "mongoose";
import AppError, { SucResponse } from "../middleware/appErrorClass.js";
import cardModel from "../model/cardModel.js";
import catchAsync from "./catchController.js";

export const createCard = catchAsync(async(req ,res,next)=>{
    if(Object.keys(req.body).length < 1) return next(new AppError('Enter Card Details !' , 400))
    if(!req.body.customerID) return next(new AppError('Mandotory customerID !' , 400))
    if(!isValidObjectId(req.body.customerID))  return next(new AppError('Enter Valid customerID !' , 400))
    const data = await cardModel.create(req.body)
    res.status(201).json(new SucResponse(`Card Data Created Successfully !` , data))

})

export const getCards = catchAsync(async (req,res,next)=>{
    const data = await cardModel.find()
    if(data.length == 0) return next(new AppError('No Such cards Found !' , 404))
    res.status(200).json(new SucResponse('Cards Found Succesfully !' , data))
})