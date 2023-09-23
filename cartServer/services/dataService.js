// import db 
const db = require('./db')

// get all products from database

const getAllProducts = () => {
    // to fetch all produvcts from mongodb
    return db.Product.find().then((result) => {
        if (result) {
            return {
                status: true,
                statusCode: 200,
                Product: result
            }
        }
        else{
            return{
                status: false,
                statusCode: 402,
                message:'Product not found'
            }
        }
     }
  )
}

module.exports={
    getAllProducts
}