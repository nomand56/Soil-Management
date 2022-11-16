let mongoose = require('mongoose');
let schema = require('./schema');
let ProductsType = mongoose.model('ProductsType',schema);

module.exports = ProductsType