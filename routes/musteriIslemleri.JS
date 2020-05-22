'use strict'

var express = require('express');
var router = express.Router();

//models
const Customer=require('../models/Customer');
const Room=require('../models/Room');


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


router.get('/ekle',(req,res)=>{
  const promise=Room.find({ });
  promise.then((rooms)=>{
    res.render('musteriEkle',{rooms});
    return rooms
  }).catch((err)=>{
    res.json(err);
  });
});

router.post('/ekle',(req,res)=>{
  const data=req.body;
  res.json(data);
});

router.get('/guncelle',(req,res)=>{
  const promise=Room.find({ });
  promise.then((rooms)=>{
    res.render('musteriGuncelle',{rooms});
    return rooms
  }).catch((err)=>{
    res.json(err);
  });
});


router.get('/',(req,res)=>{
  res.render('musteriIslemleri');
});


router.get('/listele',(req,res)=>{
  const promise=Customer.find({  }).sort({'roomNo' : 1 });
  //oda numarasına göre sıralar
  promise.then((customer)=>{
    res.render('musteriListele',{ customer });
  }).catch((err)=>{
    res.json(err);
  });
});



module.exports = router;
