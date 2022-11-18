const mongoose = require('mongoose');
let schema = new mongoose.Schema({
  "E-postal": {
    type: String,
  },
  address: {
    type: String,
  },
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  postal: {
    type: String,
  },
  street: {
    type: String,
  },
  productDetails: {
    JordType: {
      type: String,
    },
    Landomrade: {
      type: String,
    },
    Jordhoyde: {
      type: String,
    },
    land: {
      type: String,
    },
    postalCode: {
      type: String,
    },
    type: {
      type: String,
    },
  },
});

module.exports=schema