const mongoose = require("mongoose");
const schema = require("./schema");

const PostalCode = mongoose.model("PostalCode", schema);
module.exports = PostalCode;
