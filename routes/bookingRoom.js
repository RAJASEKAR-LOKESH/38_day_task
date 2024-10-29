const express = require('express');
const router = express.Router();
const Customer=require('../model/bookingRoomModel')
const Room=require('../model/createRoomModel')
router.post('/bookingRoom', async(req, res) => {
    try{
        let room=await Customer.findOne({roomId:req.body.roomId})
        console.log(room)
        if(room){
            return res.send({"message":"Room Already Booked"})//early return
        }
        const customerData=new Customer({
        customerName:req.body.customerName,
        date:req.body.date,
        startTime:req.body.startTime,
        endTime:req.body.endTime,
        roomId:req.body.roomId
    })
    customerData.save()
    res.send({message:"Room Booked Successfully",
        details:customerData
    })
}
catch(e){
    res.send("Some internal error")
}
})

module.exports = router;

//66bcc2fed5a206dd07578d22