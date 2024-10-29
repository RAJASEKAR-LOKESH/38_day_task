const express = require('express');
const router = express.Router();
const Room=require('../model/createRoomModel')
const Customer=require('../model/bookingRoomModel')


router.get('/', async(req, res) => {
        const array=[];
        let room=await Room.find({},{_id:true})
        // res.send(room)
        for (const item of room){
            // console.log(item._id);
            // res.send(item._id)
            const obj={RoomName:"",
                BookingStatus:"",
                CustomerName:"",
                Date:"",
                StartTime:"",
                EndTime:""
            }
            let findingStatus=await Customer.findOne({roomId:item._id},{roomId:true})
            if(findingStatus){
                console.log("Booked",item._id)
                let room_Name=await Room.findOne({_id:item._id},{name:true,_id:false})
                obj.RoomName=room_Name.name
                // let booked_status={bookedStatus:"Booked"}
                obj.BookingStatus="Booked"
                let customer_Name=await Customer.findOne({roomId:item._id},{customerName:true,_id:false})
                obj.CustomerName=customer_Name.customerName
                let date=await Customer.findOne({roomId:item._id},{date:true,_id:false})
                obj.Date=date.date
                let startTime=await Customer.findOne({roomId:item._id},{startTime:true,_id:false})
                obj.StartTime=startTime.startTime
                let endTime=await Customer.findOne({roomId:item._id},{endTime:true,_id:false})
                obj.EndTime=endTime.endTime
                array.push(obj)
                console.log(array)
            }
            else{
                let room_Name=await Room.findOne({_id:item._id},{name:true,_id:false})
                const obj_notbooked={
                    RoomName:"",
                    BookingStatus:"Not Booked",
                }
                obj_notbooked.RoomName=room_Name.name
                console.log("Not Booked",item._id)
                array.push(obj_notbooked)
            }
        }
        let data=JSON.stringify(array)
        res.send(data)
        console.log(data)
})

module.exports = router;

//66bcc2fed5a206dd07578d22