let Client = require('../../models/users/model')
let jwt = require('jsonwebtoken')
const getClient = async (req, res) => {
    try {
        let data = await Client.find();
        res.send(data)
    } catch (error) {
        res.send({"Error":error})
    }
}
const getAdmin = async (req,res)=>{
    try {
        let data =await Client.find({userType:"admin"})
        res.send(data)
    }
     catch (error){
        res.send({error:error})
     }
}
const postClient = async (req,res) => {
    try {

    
        let request = await new Client(req.body);
        await request.save();
    res.status(200).json({'success' : true, 'result': req.body.name})
    } catch (error) {
        res.send({"Error":error})
    }
}
const updateClient = async (req,res) => {
    try {
        let request = await Client.updateOne({ _id: req.body.id }, {
            $set: {
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            password:req.body.password,
            country:req.body.country,
            city:req.body.city,
            age:req.body.age,
            postalCode:req.body.postalCode,
            contact:req.body.contact,
            address:req.body.address,
        }})
        res.send("update successfully")
    } catch (error) {
        res.send({"Error":error})
    }
}
const deleteClient = async (req, res) => {
    try {
        let request = await Client.findByIdAndRemove(req.params.id);
    res.send("delete successfully");
  } catch (error) {
    res.send({ Error: error });
  }
};

const fetchClient = async (req, res) => {
    try {
        let request = await Client.find();
        res.send(request);
    } catch (error) {
        res.send({ Error: error });
    }
}
        const loginClient = async (req, res) => {
    try {
        let data = await Client.findOne({ email: req.body.email, password: req.body.password });
        if (data !== null)
        {
            let token = await jwt.sign({data}, 'abcdabcd');
            res.send({"token":token,"userType":data})
        }
        else{
            res.send("invalid credentials")
        }

    } catch (error) {
     res.send(error)   
    }
}





const verifyClient = async (req, res) => {
    try {
        res.send(req.body)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    getClient,
    postClient,
    updateClient,
    deleteClient,
    loginClient,
    verifyClient,
    getAdmin,
    fetchClient
}