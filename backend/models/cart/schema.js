const mongoose = require('mongoose');
const Schema= mongoose.Schema
let schema = new mongoose.Schema({
    productName: {
        type: String,
        required:true
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref:'products'
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref:'clients'
    },
    quantity: {
        type: Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    totalPrice: {
        type: Number,
        required:true
    }
})

module.exports=schema