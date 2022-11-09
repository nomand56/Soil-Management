const express = require("express");
const router = express.Router();
const products = require("../../controllers/products/index");

router.get("/getAllProducts", products.getAllProducts);
router.get("/getSingleProduct/:id", products.getSingleProduct);
router.post("/create/product", products.addProduct);
router.put("/update/product", products.updateProduct);
router.put("/update/productStatus", products.updateProductStatus);
router.delete("/delete/product/:id", products.deleteProduct);
router.post("/product/filterProducts", products.filterProduct);
router.post("/product/inquiry", products.postInquiry);
module.exports = router;
