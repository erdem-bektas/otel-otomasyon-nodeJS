'use strict'

var express = require('express');
var router = express.Router();

//models
const Customer=require('../models/Customer');
const Room=require('../models/Room');


router.get('/ekle',(req,res)=>{
  //if(req.session.isAdmin || req.session.isUser){
    const promise=Room.find({ isUsable:true });
    promise.then((rooms)=>{
      res.render('musteriEkle',{rooms});
      //res.json(room)
    }).catch((err)=>{
      res.json(err);
    });
 // }
 // else{
 //   res.render('index', { isAdmin:req.session.isAdmin });
 // }
});


router.post('/ekle',(req,res)=>{
  const data =req.body;
  if(data.isPaymentReceived=="on"){
    data.isPaymentReceived=true;
   }
   
   const customer=new Customer({
    name: data.name,
    surname:data.surname,
    tcno:data.tcno,
    telno:data.telno,
    roomNo:data.roomNo,
    payment:data.payment,
    isPaymentReceived:data.isPaymentReceived,
    entryTime:data.entryTime,
    outTime:data.outTime,
   });

    const promise = Room.findOneAndUpdate({ no: customer.roomNo },{
      isUsable:false,
      renterTc:data.tcno
    });

   promise.then((customer)=>{
    customer.save((err)=>{
          if(err)
            res.json(err)
          res.json(data)
        });
     }).catch((err)=>{
    res.json(err);
  });
});



router.get('/guncelle',(req,res)=>{
  if(req.session.isAdmin || req.session.isUser){
  const promise=Room.find({ });

  promise.then((room)=>{
    res.render('musteriGuncelle',{room, isAdmin:req.session.isAdmin });
    //return room
  }).catch((err)=>{
    res.json(err);
  });
  }else{
    res.render('index',{ isAdmin:req.session.isAdmin});
  }
});

// silme
// router.post('/guncelle',(req,res)=>{
//   const promise = Customer.findOneAndDelete({
//     tcno: "12345678912"
//   });

//   promise.then((customer)=>{
//     //res.render('',{customer, isAdmin:req.session.isAdmin });
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
    //res.render('',{customer,isAdmin:req.session.isAdmin});
    res.json(customer);
    return room
  }).catch((err)=>{
    res.json(err);
  });
});


router.get('/',(req,res)=>{
  if(req.session.isAdmin){
    res.render('musteriIslemleri',{ isAdmin:req.session.isAdmin });
  }
  else{
    res.render('index',{ isAdmin:req.session.isAdmin });
  }
});

router.get('/listele',(req,res)=>{
  const promise=Customer.find({  }).sort({'roomNo' : 1 });
  //oda numarasına göre sıralar
  promise.then((customer)=>{
    res.render('musteriListele',{ customer, isAdmin:req.session.isAdmin});
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
