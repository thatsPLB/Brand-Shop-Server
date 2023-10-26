const mongoose = require("mongoose")

const productSchema = mongoose.Schema(
    {
        product_name: {
            type: String,
            required: [true, 'Please add product name']
        },
        image_url: {
            type: String,
            required: [true, 'Please add image url']
        },
        brand_name: {
            type: String,
            required: [true, 'Please add a brand name']
        },
        option: {
            type: String,
            required: [true, 'Please add a type']
        },
        discription: {
            type: String,
            required: [true, 'Please add a discription']
        },
        rating: {
            type: String,
            required: [true, 'Please add a rating']
        },
        price: {
            type: String, 
            required: [true, 'Please add a price']
        }
    }
)

module.exports = mongoose.model('Product', productSchema)