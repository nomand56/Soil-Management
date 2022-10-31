const Cart = require('../../models/cart/model')
const addtoCart = async (req, res) => {
    try {
        let data = await new Cart(req.body);
        await data.save()
        res.send('add to cart successfully')
    } catch (error) {
     res.send({error})   
    }
}
const deleteFromCart = async (req,res) => {
    try {
        let data = await Cart.findByIdAndRemove(req.params.id)
        res.send('delete from cart successfully')
    } catch (error) {
     res.send({error})   
    }
}
const updateFromCart = async (req,res) => {
    try {
        let data =  await Cart.updateOne({ _id: req.body.id }, {
            $set:{
                price: req.body.price,
                quantity: req.body.quantity,
                totalPrice : req.body.totalPrice
            }
        })
        res.send('update successfully')
    } catch (error) {
     res.send({error})   
    }
}
const getAllCartProducts = async (req, res) => {
    try {
        let data = await Cart.find();

    res.send(data);
  } catch (error) {
    res.send({ error });
  }
};

module.exports = {
    addtoCart,
    deleteFromCart,
    updateFromCart,
    getAllCartProducts
}