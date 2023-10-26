const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8000
const connectDB = require('./config/db')
const app = express()
const Product = require('./models/productModal')

connectDB()
app.use(express.json())
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get("/", (req, res) => {
    res.status(200).json({message: "WOrking"})
})

app.get("/product/:pname", (req, res) => {
    const brand = req.params.pname;
    Product.find({"brand_name": brand}).then((data) => {
        res.send(data)
    })
})

app.post("/addproduct", (req, res) => {
   const product = Product.create({
        product_name: req.body.product_name,
        image_url: req.body.image_url,
        brand_name: req.body.brand_name,
        discription: req.body.discription,
        option: req.body.option,
        rating: req.body.rating, 
        price: req.body.price
    })

    res.status(200).json(product) 
})

// app.use('/api/product', require('./routes/productRoutes'))
app.listen(port, () => console.log(`Server is running on ${port}`))