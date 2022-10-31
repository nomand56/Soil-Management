const express = require("express");
const router = express.Router();
const Cart = require("../../controllers/cart/index");

router.get("/cart",Cart.getAllCartProducts);
router.post("/create/cart",Cart.addtoCart);
router.put("/update/cart/product",Cart.updateFromCart);
router.delete("/delete/cart/product/:id",Cart.deleteFromCart);

module.exports = router;
