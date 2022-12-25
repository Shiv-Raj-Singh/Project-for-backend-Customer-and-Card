import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_DB , {
    useNewUrlParser : true
})
.then(()=> console.log('Mongo Db Connection Done !'))
.catch((err)=> console.log(err.message))
