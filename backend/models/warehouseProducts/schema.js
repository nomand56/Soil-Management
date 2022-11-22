const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let schema = new mongoose.Schema({
  productName:{
    type:String,
    required:true
  },
  supplierPostalCode: [
    {
      warehouse: mongoose.Schema.Types.ObjectId,
      postalCode: Number,
      _id: mongoose.Schema.Types.ObjectId
    }
  ],
  description: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
    
  },
  inPrice: {
    type: Number,
    required: true,
    
  },
  price: {
    type: Number,
    required: true,

  },
  land: {
    type: String,
    required: true,

  },
  jord:{
    type: String,
    required: true,

  },
  image:{
    type: String,
    required: true,

  }

});

module.exports = schema;
