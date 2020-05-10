const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// tc unique ve required olmalı

const CustomerSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    tcno:{
        type:String,
        unique:true
    },
    telno:{
        type:String,
    }

});


module.exports=mongoose.model('customer',CustomerSchema);