const express = require("express");
const router = express.Router();
const WareHouses = require("../../controllers/WareHouses/index");

router.get("/warehouses", WareHouses.getAllWareHouses);
router.get("/warehouses/getallproducts/:id", WareHouses.getAllProducts);
router.post("/warehouses/create", WareHouses.createWareHouses);
router.delete("/warehouses/delete/:id", WareHouses.deleteWareHouse);
// router.post("/warehouses/postal", WareHouses.addPostalCode);
// router.get("/warehouses/getPostal", WareHouses.getPostalCode);
module.exports = router;
