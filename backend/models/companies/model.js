let mongoose = require('mongoose');
let schema = require('./schema');
let Companies = mongoose.model('companies', schema)

module.exports = Companies;