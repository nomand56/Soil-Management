let mongoose = require('mongoose');
let schema = require('./schema');
let products = mongoose.model('product',schema);

module.exports = products