const express = require("express");
const router = express.Router();
const products = require("../../controllers/products/index");

router.get("/getAllProducts", products.getAllProducts);
router.post("/create/product", products.addProduct);
router.put("/update/product", products.updateProduct);
router.put("/update/productStatus", products.updateProductStatus);
router.delete("/delete/product/:id", products.deleteProduct);


module.exports = router;
