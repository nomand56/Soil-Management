let mongoose = require('mongoose');
let Schema = mongoose.Schema

let shipmentAddress = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  streetAddress: {
    type: String,
    required: true,
  },
  apt_suite: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
  },
  deliveryTime: {
    type: String,
    required: true,
  },
});

let schema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "products",
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
    ref: "clients",
  },
  companyId: {
    type: Schema.Types.ObjectId,
    ref: "companies",
  },
  date: {
    type: String,
    required: true,
  },
  orderStatus: {
    type: String,
    required: true,
    default: "pending",
  },
  shipmentDetails: {
    type: shipmentAddress ,
    required:true
  }
});

module.exports=schema