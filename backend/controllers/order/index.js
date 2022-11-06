let order = require('../../models/orders/schema')

const createOrder = async (req, res) => {
    try {
        let data = new order(req.body);
        await data.save();
        res.send('created..')
    } catch (error) {
        res.send(error)
    }
}
const getspecificOrders = async (req,res) => {
  try {
    let data = await order.find({ "user.email" : req.body.email });
    res.send(data)
  } catch (error) {
   res.send(error) 
  }
}
const updateOrder = async (req, res) => {
  try {
    let data = await order.findOne({_id:req.body.id});
     await order.updateOne({ _id: req.body.id }, {
            $set: {
                price: data.price+req.body.price,
                quantity:data.quantity+req.body.quantity,
                totalPrice:data.totalPrice+req.body.totalPrice
          }
      })
    res.send("updated..");
  } catch (error) {
    res.send(error);
  }
};


const deleteOrder = async (req, res) => {
    try {
      let data =await order.findByIdAndRemove(req.params.id)
    res.send("deleted...");
  } catch (error) {
    res.send(error);
  }
};

const getAllOrders = async (req, res) => {
    try {
        let data = await order.find();
    res.send(data);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  createOrder,
  updateOrder,
  deleteOrder,
  getAllOrders,
  getspecificOrders,
};