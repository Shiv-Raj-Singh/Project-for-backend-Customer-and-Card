export default class AppError extends Error{
    constructor(message , statusCode){
        super(message)
        this.status = false
        this.message = message
        this.statusCode = statusCode
    }
}

export class SucResponse {
    constructor(message , data){
        this.status = true
        this.message = message
        this.data = data
    }
}

