// server creation

// 1.  import express
const express= require('express')
// import corse
const cors=require('cors')


//2.  using express create an application
const app= express()

//3.  set up port number
app.listen(3000,()=>{
    console.log('express server listining on port 3000');
})

//4. use json parser for server application
app.use(express.json())

//using cors specify origin to the server
app.use(cors({
    origin:'http://localhost:4200'
}))

//
const dataService= require('./services/dataService')

////Api to get all product
app.get('/app-products',(req,res)=>{
    dataService.getAllProducts()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})