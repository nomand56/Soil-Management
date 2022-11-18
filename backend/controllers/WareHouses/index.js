const WareHouses = require('../../models/warehouses/model')
const product = require('../../models/products/model')

const getAllWareHouses = async (req, res) => {
    try {
        let data = await WareHouses.find();
        res.send(data)
    } catch (error) {
        res.send({error})
    }
}

const getAllProducts = async (req, res) => {
    try {
        let data = await product.find({ supplierId: req.params.id });
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
  
};