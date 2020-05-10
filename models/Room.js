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
    },
    rentalDate:{
        type:Date,
        default:Date.now
    },
    dateOfExit:{
        type:Date,
        default:Date.now 
    },
    howManyBeds:{
        type:Number,
        required:true
    }


});


module.exports=mongoose.model('room',RoomSchema);