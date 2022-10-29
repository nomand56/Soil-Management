let mongoose = require('mongoose');
let Schema = mongoose.Schema

let schema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref:"clients"
  },
  companyId: {
      type: Schema.Types.ObjectId,
      ref:"companies"
  },
  date: {
    type: String,
    required: true,
  },
});

module.exports=schema