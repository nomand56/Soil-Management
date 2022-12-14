const WareHouses = require('../../models/warehouses/model')
const warehouseProduct=require("../../models/warehouseProducts/model")
const product = require("../../models/products/model");
const getAllWareHouses = async (req, res) => {
    try {
        let data = await WareHouses.find();
        res.send(data)
    } catch (error) {
        res.send({error})
    }
}
const getAllWarehouseProducts = async (req, res) => {
    try {
        let data = await warehouseProduct.find();
    console.log(data)
        res.send(data);
      } catch (error) {
        res.send({ error });
      }
    };
const deleteWarehouseProduct = async (req, res) => {
    try {
        let data = await warehouseProduct.findByIdAndDelete(req.params.id);
        res.send({ success: "ok", message: "warehouse product deleted" });
        } catch (error) {
        res.send({ error });
        }
    };
const addWarehouseProduct = async (req, res) => {
    try {
        let data = new warehouseProduct(req.body);
        await data.save();
        res.send("created..");
        } catch (error) {
        res.send({ error });
        }
    };


const getAllProducts = async (req, res) => {
    try {
        let data = await product.find({ supplierId: req.params.id })
        res.send(data)
    } catch (error) {
        res.send({error})
  }
}


const createWareHouses = async (req, res) => {
    try {
        let data = await new WareHouses(req.body);
        await data.save();
        res.send({success:"ok",message:"warehouse created"})
    } catch (error) {
        res.send({error})
  }
};

const deleteWareHouse = async (req, res) => {
    try {
        let data = await WareHouses.findByIdAndRemove(req.params.id)
         res.send({ success: "ok", message: "warehouse deleted" });
    } catch (error) {
        res.send({error})
  }
};
module.exports = {
  getAllWareHouses,
  getAllProducts,
  createWareHouses,
  deleteWareHouse,
  addWarehouseProduct,
  getAllWarehouseProducts,
  deleteWarehouseProduct
};