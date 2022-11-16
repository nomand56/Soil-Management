const mongooes=require('mongoose');


const productTypeSchema=new mongooes.Schema({
    postalCode:{
        type:String,
    },
    wareHouse:{
        type:String,
        
    }
})
module.exports=mongooes.model('ProductType',productTypeSchema) 
