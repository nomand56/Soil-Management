const mongoose = require("mongoose");

let schema = new mongoose.Schema({
  warehouseName: {
    type: String,
    required: true,
    unique: true,
  },
  OwnerName: {
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
  country: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
});

module.exports = schema;
