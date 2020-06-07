const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// tc unique ve required olmalı

const CustomerSchema = new Schema({
    name:{
        type:String,
    },
    surname:{
        type:String,
    },
    tcno:{
        type:String,
        unique:true,
        required:true,
        maxlength:11
    },
    telno:{
        type:String,
    },
    isInTheRoom:{
        type:Boolean,
        default:true
    },
    roomNo:{
        type:Number
    },
    entryTime:{
        type:String
    },
    outTime:{
        type:String
    },
    payment:{
        type:String
    },
    isPaymentReceived:{
        type:Boolean,
        default:false
    }
});


module.exports=mongoose.model('customer',CustomerSchema);