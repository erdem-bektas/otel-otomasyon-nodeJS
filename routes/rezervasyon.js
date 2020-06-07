const express = require('express');
const router = express.Router();

//Models
const Customer = require('../models/Customer');
const Room = require('../models/Room');
const User = require('../models/Users');

router.get('/', (req, res) => {
    const promise=Room.find({ isUsable:true });
    promise.then((rooms)=>{
      res.render('rezervasyonEkle' ,{ isAdmin:req.session.isAdmin, isUser: req.session.isUser, rooms  });
    }).catch((err)=>{
      res.json(err);
    });
  });

router.post('/',(req,res)=>{
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

    //const promise = customer.save();

    const promise = Room.findOneAndUpdate({ no: customer.roomNo },{
        isUsable:false,
        renterTc:data.tcno
        });


    promise.then(data=>{
        customer.save((err)=>{
            if(err)
            res.json(err)
        });
    res.redirect('/');
    })
    .catch(err=>{
    res.json(err);
    });
});

router.get('/sil', (req, res) => {
  const promise=Room.find({ isUsable:false });
  promise.then((rooms)=>{
    res.render('rezervasyonSil' ,{ isAdmin:req.session.isAdmin, isUser: req.session.isUser, rooms  });
  }).catch((err)=>{
    res.json(err);
  });
});


router.post('/sil', (req, res) => {
  const data =req.body;

    const promise=Room.findOneAndDelete({ tcno:data.tcno });
    promise.then(()=>{
      res.redirect('/');
    }).catch((err)=>{
      res.json(err);
    });


  });


module.exports = router;
  