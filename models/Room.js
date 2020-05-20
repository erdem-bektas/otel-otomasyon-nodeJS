const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// room no unique ve required olmalı 
const RoomSchema = new Schema({
    no:{
        type:Number,
        required:true,
        unique:true
    },
    dailyPrice:{
        type:Number,
    },
    renterId:{
        type: String,
        default:NaN
    },
    rentalDate:{
        type:Date,
        default:Date.now
    },
    dateOfExit:{
        type:Date,
        default:Date.now 
    },
    isUsable:{
        type:Boolean,
        default:true
    },
    capacityOfTheRoom:{
        type:Number,
        default:1
    }


});


module.exports=mongoose.model('room',RoomSchema);