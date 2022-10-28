const jwt = require("jsonwebtoken");
const verifyToken = async (req, res, next) => {
try {
      let data = jwt.verify(req.body.token, "abcdabcd");
    console.log(data.data);
    next()
} catch (error) {
    res.send({'invalid Token':error})
}
};
module.exports = verifyToken;
