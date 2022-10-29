const express = require("express");
const router = express.Router();
const Company = require("../../controllers/companies/index");
const verifyToken = require("../../middlewares/jwt/index");



router.get("/", Company.getAllCompany);
router.post("/register", Company.createCompany);
router.put("/update", Company.updateCompany);
router.delete("/delete/:id", Company.deleteCompany);


module.exports = router;
