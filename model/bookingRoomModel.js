const mongoose=require('mongoose')
const customerSchema=new mongoose.Schema({
    customerName:{type:String},
    date:{type:String},
    startTime:{type:String},
    endTime:{type:String},
    roomId:{type:String},
})
const Customer=mongoose.model("Customer",customerSchema)
module.exports=Customer