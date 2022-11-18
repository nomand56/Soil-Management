let PostalCode=require('../../models/postalcode/modal')

const add = async (req, res) => {
    try {
        let data = new PostalCode(req.body);
        await data.save();
        res.send({success:true,message:'added'})
    } catch (error) {
        res.send({success:false,error:error})
    }
}
const deletePostal = async (req, res) => {
  try {
      await PostalCode.findByIdAndRemove(req.params.id);
    res.send({ success: true, message: "deleted" });
  } catch (error) {
    res.send({ success: false, error: error });
  }
};
const get = async (req, res) => {
  try {
      let data = await PostalCode.find();
    res.send(data);
  } catch (error) {
    res.send({ success: false, error: error });
  }
};

const getPostal = async (req, res) => {
  const { id } = req.params;
  console.log(id) 
  try {
      let data = await PostalCode.find({warehouse:id});
        res.send(data);
  } catch (error) {
    res.send({ success: false, error: error });
  }
};


module.exports={
    add, deletePostal,
    get,
    getPostal
}