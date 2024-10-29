const mongoose=require('mongoose')
const roomSchema=new mongoose.Schema({
    name:{type:String},
    seats:{type:Number},
    amnities:{type:String},
    price:{type:Number,default:100},
})
const Room=mongoose.model("Room",roomSchema)

module.exports=Room