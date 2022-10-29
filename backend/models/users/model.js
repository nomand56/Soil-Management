let mongoose = require('mongoose');
let schema = require('./schema');
let Client = mongoose.model('client', schema);
module.exports=Client