let mongoose = require('mongoose');
let schema=require('./schema')
let Order = mongoose.model('order', schema)
module.exports=Order