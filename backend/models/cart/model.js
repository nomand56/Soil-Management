let mongoose = require('mongoose');
let schema = require('./schema');

let Cart = mongoose.model('cart', schema);

module.exports=Cart