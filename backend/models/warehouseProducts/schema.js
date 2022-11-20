const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let schema = new mongoose.Schema({

  supplierPostalCode: {
    type: Number,
    required: true,
  },
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
