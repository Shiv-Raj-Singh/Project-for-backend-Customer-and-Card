const globalError = (err , req ,res ,next )=>{
    err.message = err.message || 'Internal Server Error !'
    err.statusCode = err.statusCode || 500
    
    if(err.name == "ValidationError"){
        err.statusCode = 400
        const keys = err.errors
        const error = Object.values(keys).reverse()

        if(error.length > 0 ){
            err.message = error[0].message
            if(error[0].name == 'CastError'){
                err.message = `${error[0].path} Should be ${error[0].kind}`
            }
        }
        if(error[0].properties.type == "enum"){
            console.log(Error)
            err.message = `${error[0].path} Should be One of ${error[0].properties.enumValues}`
        }
    }

    if(err.code == 11000){
        err.statusCode = 400
        const values = Object.keys(err.keyValue)
        err.message = `${values[0]} is Already Exist !`
    }


    res.status(err.statusCode).json({
        status : false ,
        message : err.message
    })
}
 
export default globalError