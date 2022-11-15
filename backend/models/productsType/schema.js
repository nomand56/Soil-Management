const mongooes=require('mongoose');


const productTypeSchema=new mongooes.Schema({
    productType:{
        type:String,
    },
    image:{
        type:String,
        
    }
})
const ProductType=mongooes.model('ProductType',productTypeSchema) 
module.exports=ProductType