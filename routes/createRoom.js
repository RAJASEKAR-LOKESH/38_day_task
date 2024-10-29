const express = require('express');
const router = express.Router();
const Room=require('../model/createRoomModel')
router.post('/createRoom', (req, res) => {

    const roomData=new Room({
        name:req.body.name,
        seats:req.body.seats,
        amnities:req.body.amnities,
        price:req.body.price,
    })
    roomData.save()
    res.send(roomData)
});

module.exports = router;
