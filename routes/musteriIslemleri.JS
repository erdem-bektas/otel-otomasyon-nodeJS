'use strict'

var express = require('express');
var router = express.Router();

//models
const Customer=require('../models/Customer');
const Room=require('../models/Room');


router.get('/ekle',(req,res)=>{
  if(req.session.isAdmin || req.session.isUser){
    const promise=Room.find({ });
    promise.then((rooms)=>{
      res.render('musteriEkle',{rooms});
      return rooms
    }).catch((err)=>{
      res.json(err);
    });
  }
  else{
    res.render('index');
  }
});

router.post('/ekle',(req,res)=>{
  const promise=Customer.insertMany({
    name: "customer1",
    surname:"surname1",
    tcno:"12345678900"
   });

  promise.then((customer)=>{
    res.json(customer)
  }).catch((err)=>{
    res.json(err);
  });
});


router.get('/guncelle',(req,res)=>{
  if(req.session.isAdmin || req.session.isUser){
  const promise=Room.find({ });

  promise.then((rooms)=>{
    res.render('musteriGuncelle',{rooms});
    return rooms
  }).catch((err)=>{
    res.json(err);
  });
  }else{
    res.render('index');
  }
});

// silme
// router.post('/guncelle',(req,res)=>{
//   const promise = Customer.findOneAndDelete({
//     tcno: "12345678912"
//   });

//   promise.then((customer)=>{
//     //res.render('',{customer});
//     res.json(customer);
//   }).catch((err)=>{
//     res.json(err);
//   });
// });


router.post('/guncelle',(req,res)=>{
  const data=req.body;
  //res.json(data);
  const promise=Customer.findOne({ 
    tcno: "39944023933"
   }).findOneAndUpdate({
    name:"değişen ad",
    surname:"değişen soyad",
    tcno:"12345678912",
    roomNo:103
  });

  promise.then((customer)=>{
    //res.render('',{customer});
    res.json(customer);
    return rooms
  }).catch((err)=>{
    res.json(err);
  });
});


router.get('/',(req,res)=>{
  if(req.session.isAdmin){
    res.render('musteriIslemleri');
  }
  else{
    res.render('index');
  }
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


router.post('/ara',(req,res)=>{
  const promise=Customer.find({
    tcno: 39944023932
   });

  promise.then((customer)=>{
    res.json(customer);
  }).catch((err)=>{
    res.json(err);
  });
});


module.exports = router;
