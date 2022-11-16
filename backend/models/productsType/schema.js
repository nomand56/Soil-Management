const mongooes=require('mongoose');


 const schema=new mongooes.Schema({
    productType:{
        type:String,
    },
    image:{
        type:String,
        
    }
})
module.exports=schema