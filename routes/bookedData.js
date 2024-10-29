const express = require('express');
const router = express.Router();
const Customer=require('../model/bookingRoomModel')
const Room=require('../model/createRoomModel')

router.get('/bookedData', async(req, res) => {
    try{
        
        let customer=await Customer.find({},{_id:false,__v:false,roomId:false})
        let roomName=await Room.find()
        console.log(customer)
        res.send(customer)
        // if(room){
        //     return res.send({"message":"Room Already Booked"})//early return
        // }
        // const room1 = await Room.findById(room);

    // res.send({message:"Room Booked Successfully",
    //     details:customerData
    // })
}
catch(e){
    res.send("Some internal error")
}
})

module.exports = router;

//66bcc2fed5a206dd07578d22