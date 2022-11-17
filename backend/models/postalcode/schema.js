const mongoose = require("mongoose");
let schema = new mongoose.Schema({
  PostalCode: {
    type: Number,
    required: true,
  },
});

module.exports = schema;
