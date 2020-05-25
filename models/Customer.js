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

    },
    outTime:{

    },
    payment:{

    },
    isPaymentReceived:{
        type:Boolean,
        default:false
    }

});


module.exports=mongoose.model('customer',CustomerSchema);