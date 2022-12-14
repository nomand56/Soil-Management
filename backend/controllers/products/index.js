let products = require("../../models/products/model");
let inquiry = require("../../models/inquiry/model");
let ProductsType=require("../../models/productsType/model")
let warehouseproducts = require("../../models/warehouseProducts/model");
const addProduct = async (req, res) => {
  try {
    let data = await new products(req.body);
    await data.save();
    res.send({ seccess: "ok", message: "add to products successfully" });
  } catch (error) {
    console.log(error);
  }
};
const deleteProduct = async (req, res) => {
  try {
    let data = await products.findByIdAndDelete(req.params.id);
    res.send({ success: "ok", message: "deleted" });
  } catch (error) {
    res.send({ message: error });
  }
};
const updateProduct = async (req, res) => {
  try {
    let data = await products.updateOne(
      { _id: req.body.id },
      {
        $set: {
          productName: req.body.productName,
          quantity: req.body.quantity,
          price: req.body.price,
          productStatus: req.body.productStatus,
        },
      }
    );
    res.send("update successfully");
  } catch (error) {
    res.send({ error });
  }
};
const addProductType = async (req, res) => {
  try {
    let data =  new ProductsType(req.body);
    await data.save();

    res.send({ seccess: "ok", message: "add to products successfully" });
  } catch (error) {
    console.log(error);
  }
};
const getProductType = async (req, res) => {
  try {
    let data = await ProductsType.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
};

const updateProductStatus = async (req, res) => {
  try {
    let data = await products.updateOne(
      { _id: req.body.id },
      {
        $set: {
          productStatus: req.body.productStatus,
        },
      }
    );
    res.send("update successfully");
  } catch (error) {
    res.send({ error });
  }
};

const getAllProducts = async (req, res) => {
  try {
    let data = await products.find();

    res.send(data);
  } catch (error) {
    res.send({ error });
  }
};

const filterProduct = async (req, res) => {
  try {
    let data = await products.find({
      usedFor: req.body.for,
      supplierPostalCode: {
        $lte: +req.body.postalCode + 10,
        $gte: +req.body.postalCode - 10,
      },
    });
    console.log(data);
    if (data.length > 0) {
      res.send(data);
    } else {
      res.status(404).send({ message: "not found" });
    }
  } catch (error) {
    res.send({ error });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    let data = await products.findOne({ _id: req.params.id });
    res.send(data);
  } catch (error) {
    res.send({ error });
  }
};

const getSingleProductByLandJord = async (req, res) => {
  try {
    let Postal = parseInt(req.params.postal);
    let data = await warehouseproducts.find({
      land: req.params.land,
      productName: req.params.jord,
    "supplierPostalCode": { $elemMatch: { "postalCode": Postal } } 
    
      // supplierPostalCode:Postal
    });
if(data.length>0){
  res.send(data);
}else{
  res.send("product not found")

}
  } catch (error) {
    res.send({ error });
  }
};

const postInquiry = async (req, res) => {
  try {
    let data = await new inquiry(req.body);
    await data.save();
    res.send({ success: "ok", message: "inquiry sent successfully" });
  } catch (error) {
    res.send({ error });
  }
};
const fetchInquiry = async (req, res) => {
  try {
    let data = await inquiry.find();
    res.send(data);
  } catch (error) {
    res.send({ error });
  }
};

module.exports = {
  addProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  updateProductStatus,
  getSingleProduct,
  filterProduct,
  postInquiry,
  fetchInquiry,
  getSingleProductByLandJord,
  addProductType,
  getProductType,
};
