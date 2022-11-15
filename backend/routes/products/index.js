const express = require("express");
const router = express.Router();
const products = require("../../controllers/products/index");
const { route } = require("../users");

router.get("/getAllProducts", products.getAllProducts);
router.get("/getSingleProduct/:id", products.getSingleProduct);
router.post("/create/product", products.addProduct);
router.put("/update/product", products.updateProduct);
router.put("/update/productStatus", products.updateProductStatus);
router.delete("/delete/product/:id", products.deleteProduct);
router.post("/product/filterProducts", products.filterProduct);
router.post("/product/inquiry", products.postInquiry);
router.get("/product/getInquiry", products.fetchInquiry);
router.get(
  "/product/getproduct/landjord/:land/:jord/:postal",
  products.getSingleProductByLandJord
);
router.post("/product/productType" , products.addProductType)
router.get("/product/getProductType" , products.getProductType)

module.exports = router;
