let products = require("../../models/products/model");

const addProduct = async (req, res) => {
  try {
    let data = await new products(req.body);
    await data.save();
    res.send("add to products successfully");
  } catch (error) {
    console.log(error);
  }
};
const deleteProduct = async (req, res) => {
  try {
    let data = await products.findByIdAndRemove(req.params.id);
    res.send("delete from products successfully");
  } catch (error) {
    res.send({ error });
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



const getSingleProduct = async (req, res) => {
  try {
    let data = await products.findOne({_id:req.params.id});

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
  getSingleProduct
};
