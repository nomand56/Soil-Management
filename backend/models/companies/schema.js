const mongoose = require('mongoose');
let schema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
      location: {
        type: String,
        required:true
    },
        contact: {
        type: String,
        required:true
    },
          owner: {
        type: String,
        required:true
    },
            field: {
        type: String,
        required:true
    }
})

module.exports=schema