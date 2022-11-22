const express = require("express");
const router = express.Router();
const WareHouses = require("../../controllers/WareHouses/index");

router.get("/warehouses", WareHouses.getAllWareHouses);
router.get("/warehouses/getallproducts/:id", WareHouses.getAllProducts);
router.post("/warehouses/create", WareHouses.createWareHouses);
router.delete("/warehouses/delete/:id", WareHouses.deleteWareHouse);
router.get("/warehouses/getAllWarehouseProducts", WareHouses.getAllWarehouseProducts);
router.post("/warehouses/warehouseProduct", WareHouses.addWarehouseProduct);
router.delete("/warehouses/deleteWarehouseProduct/:id", WareHouses.deleteWarehouseProduct);
module.exports = router;
