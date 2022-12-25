import express from "express";
import dotenv from "dotenv"
dotenv.config()
import './db.js'
import { router } from "./route/route.js";
import globalError from "./middleware/globalErrorHandler.js";
import AppError from "./middleware/appErrorClass.js";
const app = express()
app.use(express.json())


app.use('/' , router)

app.use(express.Router().all('/*' , (req,res,next)=>{
     return next(new AppError(`${req.url} Url is Not Found On Server !` , 404))
}))
app.use(globalError)
app.listen(process.env.PORT , ()=>{
    console.log(`Hey Shiv Raj Singh Your App is Running On ${process.env.PORT} Port Number !`)
})
