const mongoose = require("mongoose");
let schema = new mongoose.Schema({
  postalCode: {
    type: Number,
    required: true,
  },
  warehouse: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Warehouse",
    required: true,
    
  },
});

module.exports = schema;
