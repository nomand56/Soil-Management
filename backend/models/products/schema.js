const mongoose = require("mongoose");
let schema = new mongoose.Schema({
  productName: {
    type: String,

  },
  description: {
    type: String,

  },
  land: {
    type: String,
    requireq: true,
  },

  image: {
    type: String,
  },});

module.exports = schema;
