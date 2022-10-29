const express = require("express");
const router = express.Router();
const order = require("../../controllers/order/index");


router.get("/", order.getAllOrders);
router.post("/create", order.createOrder);
router.put("/update", order.updateOrder);
router.delete("/delete/:id", order.deleteOrder);

module.exports = router;
