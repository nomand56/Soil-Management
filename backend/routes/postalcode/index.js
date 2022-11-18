const express = require("express");
const router = express.Router();
const postalCode = require("../../controllers/postalcode/index");

router.get("/get/all/postal", postalCode.get);
router.post("/add/postal", postalCode.add);
router.delete("/delete/postal/:id", postalCode.deletePostal);
router.post("/get/specificepostal/:id", postalCode.getPostal);

module.exports = router;
