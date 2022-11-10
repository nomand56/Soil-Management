let order = require('../../models/orders/schema')
const Product = require('../../models/products/model')
const ErrorHandler = require('../../utils/ErrorHandler');
const catchAsyncError = require("../../middlewares/CatchAsycnErrors")
const createOrder = async (req, res) => {
  try {
    let data = new order(req.body);
    await data.save();
    res.send('created..')
  } catch (error) {
    res.send(error)
  }
}
const getspecificOrders = async (req, res) => {
  try {
    let data = await order.find({ "user.email": req.body.email });
    res.send(data)
  } catch (error) {
    res.send(error)
  }
}
const updateOrder = async (req, res) => {
  try {
    let data = await order.findOne({ _id: req.body.id });
    await order.updateOne({ _id: req.body.id }, {
      $set: {
        price: data.price + req.body.price,
        quantity: data.quantity + req.body.quantity,
        totalPrice: data.totalPrice + req.body.totalPrice
      }
    })
    res.send("updated..");
  } catch (error) {
    res.send(error);
  }
};
const getAdminSingleOrder = async (req, res) => {
  try {
    let data = await order.findOne({ _id: req.params.id });

    res.send(data);
  } catch (error) {
    res.send(error);
  }
};
const updateOrderStatus = catchAsyncError(async (req, res, next) => {
  if (!req.params.id) {
    return next(new ErrorHandler('Order not found', 400));
  }
  if (!req.body.status) {
    return next(new ErrorHandler('Invalid request', 400));
  }
  const Order = await order.findById(req.params.id);
  if (!Order) {
    return next(new ErrorHandler('Order not found', 200));
  }
  if (Order.orderStatus === 'delivered') {
    return next(new ErrorHandler('You have already delivered this order', 400));
  }
  if (req.body.status === 'confirmed') {
    let successCount = 0;
    let failureCount = 0;
    let orderLength = Order.orderItems.length;
    for (let index = 0; index < orderLength; index++) {
      const item = Order.orderItems[index];
      let success = await updateStock(item.product, item.quantity);
      if (success) {
        successCount += 1;
      } else {
        failureCount += 1;
      }
    }
    if (failureCount > 0) {
      return next(new ErrorHandler('Product out of stock', 400));
    }
  }
  Order.orderStatus = req.body.status;
  if (req.body.status === 'delivered') {
    order.deliveredAt = Date.now();
  }
  await Order.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
    data: Order,
  });
});


const deleteOrder = async (req, res) => {
  try {
    let data = await order.findByIdAndRemove(req.params.id)
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
const updateStock = async (id, quantity) => {
  const product = await Product.findById(id)
  if (product.stock < quantity) {
    return false;
  }
  product.stock -= quantity;
  await product.save({ validateBeforeSave: false });
  return true;
};
module.exports = {
  createOrder,
  updateOrder,
  deleteOrder,
  getAllOrders,
  getspecificOrders,
  getAdminSingleOrder,
  updateOrderStatus
};