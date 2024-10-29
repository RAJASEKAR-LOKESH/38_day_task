const express = require('express');
const connection=require('./db/connection')
const createRoomRouter=require('./routes/createRoom')
const bookingRoomRouter=require('./routes/bookingRoom')
const bookedRoomRouter=require('./routes/bookedRoom')
const allCustomer=require('./routes/allCustomer')
const bookedData=require('./routes/bookedData')

const dotenv=require('dotenv')
dotenv.config()
const app = express();
const PORT = process.env.PORT || 5000;
connection();
app.use(express.json())
app.use(createRoomRouter);
app.use(bookingRoomRouter);
app.use(bookedRoomRouter);
app.use(allCustomer);
app.use(bookedData);

app.listen(PORT, () => {
    console.log(`Server Started Running`,PORT);
});
