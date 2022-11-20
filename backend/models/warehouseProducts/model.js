let mongoose = require('mongoose');
let schema = require('./schema');
let warehouseproducts = mongoose.model('warehouseproduct',schema);

module.exports = warehouseproducts

