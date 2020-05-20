var express = require('express');
var router = express.Router();

//models
const Customer=require('../models/Customer');
const Room=require('../models/Room');

function gelsin  (req,res) {
  const promise=Room.find({ });
  promise.then((rooms)=>{
    //return rooms[0].no;
    return rooms
  }).catch((err)=>{
    res.json(err);
  });
}

router.get('/',(req,res)=>{
  const promise=Customer.find({ });
  promise.then((customer)=>{
    res.render('musteriIslemleri',{ customer });
  }).catch((err)=>{
    res.json(err);
  });


});



router.get('/new', function(req, res, next) {
  const customer = new Customer({
    name:"Engin",
    surname:"Bektaş",
    tcno:"39944023932",
    telno:"",
    roomNo: 5
  });

  customer.save((err,data)=>{
      if(err)
      console.log(err);
      res.json(data);
  });
});













module.exports = router;
