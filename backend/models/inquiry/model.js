const mongoose = require('mongoose');
const schema = require('./schema');


const inquiry = mongoose.model('inquiry', schema);
module.exports = inquiry