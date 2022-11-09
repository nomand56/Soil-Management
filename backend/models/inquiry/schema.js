const mongoose = require('mongoose');
let schema = new mongoose.Schema({
    email: {
        type: String,
        required:true
    },
      postalCode: {
        type: String,
        required:true
    },
        quantity: {
        type: String,
        required:true
    },
          soil: {
        type: String,
        required:true
    },
        service: {
        type: String,
        required:true
    }
})

module.exports=schema