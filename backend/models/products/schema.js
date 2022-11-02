const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let schema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  supplierId: {
    type: Schema.Types.ObjectId,
    ref: "clients",
  },
   supplierPostalCode: {
        type:Number,
        required:true
    },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
    productStatus: {
        type: String,
        required:true
    },
    image: {
        type:String,
        required:true
  },
     category: {
        type:String,
        required:true
  },
      usedFor: {
        type:[String],
        required:true
    }
});

module.exports = schema;
