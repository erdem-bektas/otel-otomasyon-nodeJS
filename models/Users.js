const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true
    }

});


module.exports=mongoose.model('user',UsersSchema);