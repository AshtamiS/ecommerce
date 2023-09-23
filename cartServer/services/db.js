// import mongoose
const mongoose = require('mongoose')

//define connection string
mongoose.connect('mongodb://localhost:27017/cart',()=>{
    console.log('connected to mongodb');
})

//create model to store all products
const Product= mongoose.model('Product',{
  id:Number,
  title:String,
  price:Number,
  description:String,
  category:String,
  image:String,
  rating:{
    rate:Number,
    count:Number 
  }
})
module.exports={
    Product
}

