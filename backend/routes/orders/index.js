const express = require("express");
const router = express.Router();
const order = require("../../controllers/order/index");


router.get("/orders", order.getAllOrders);
router.post("/create/order", order.createOrder);
router.put("/update/order", order.updateOrder);
router.delete("/delete/order/:id", order.deleteOrder);

module.exports = router;
