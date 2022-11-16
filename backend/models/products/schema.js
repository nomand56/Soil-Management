const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let schema = new mongoose.Schema({
  productName: {
    type: String,
    
  },
  // supplierId: {
  //   type: Schema.Types.ObjectId,
  //   ref: "warehouses",
  // },
  supplierPostalCode: {
    type: Number,
    
  },
  description: {
    type: String,
    
  },
  stock: {
    type: Number,
    
  },
  price: {
    type: Number,
    
  },
  image: {
    type: String,
  },
  land: {
    type: String,
    
  },
  jord: {
    type: String,
    
  },
  quantity: {
    type: String,
    
  },
  featured: {
    type: Boolean,
    
  },
  productsType: {
    type: String,
  },

  usedFor: {
    type: [String],
    
  },
});

module.exports = schema;
