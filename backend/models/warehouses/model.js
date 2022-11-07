const mongoose = require('mongoose');
const schema = require('./schema');


const WareHouses = mongoose.model('warehouse', schema);
module.exports = WareHouses