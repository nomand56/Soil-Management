const Companies = require('../../models/companies/model')


const createCompany = async (req, res) => {
    try {
        let data = await new Companies(req.body);
        await data.save();
        res.send('create company')
    } catch (error) {
        res.send(error)
    }
}

const updateCompany = async (req, res) => {
    try {
        const data = await Companies.updateOne({ _id: req.body.id }, {
            $set: {
                name: req.body.name,
                location: req.body.location,
                contact: req.body.contact,
                owner: req.body.owner,
                field:req.body.field
        }})
        res.send('update company data')
    } catch (error) {
        res.send(error)
    }
}


const deleteCompany = async (req, res) => {
    try {
      let data = await Companies.findByIdAndRemove(req.params.id)
    res.send("delete company successfully.");
  } catch (error) {
    res.send(error);
  }
};


const getAllCompany = async (req, res) => {
    try {
        let data = await Companies.find()
    res.send(data);
  } catch (error) {
    res.send(error);
  }
};


module.exports = {
    createCompany,
    updateCompany,
    deleteCompany,
    getAllCompany
}