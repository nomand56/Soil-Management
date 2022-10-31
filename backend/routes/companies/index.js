const express = require("express");
const router = express.Router();
const Company = require("../../controllers/companies/index");
const verifyToken = require("../../middlewares/jwt/index");



router.get("/companies", Company.getAllCompany);
router.post("/register/company", Company.createCompany);
router.put("/update/company/record", Company.updateCompany);
router.delete("/delete/company/:id", Company.deleteCompany);


module.exports = router;
