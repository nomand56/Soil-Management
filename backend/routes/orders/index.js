const express = require("express");
const router = express.Router();
const order = require("../../controllers/order/index");


router.get("/orders", order.getAllOrders);
router.post('/order/user/',order.getspecificOrders)
router.post("/create/order", order.createOrder);
router.post("/order/single/:id", order.getAdminSingleOrder);
router.put("/update/order", order.updateOrder);
router.put("/order/status/:id", order.updateOrderStatus);  
router.delete("/delete/order/:id", order.deleteOrder);

module.exports = router;
