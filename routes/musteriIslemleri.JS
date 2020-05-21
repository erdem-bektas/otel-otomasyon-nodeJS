var express = require('express');
var router = express.Router();

//models
const Customer=require('../models/Customer');
const Room=require('../models/Room');

// router.get('/',(req,res)=>{
//   const promise=Customer.find({ });
//   promise.then((customer)=>{
//     res.render('musteriIslemleri',{ customer });
//   }).catch((err)=>{
//     res.json(err);
//   });
// });


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
  res.render('musteriGuncelle')
});


router.get('/',(req,res)=>{
  res.render('musteriIslemleri');
});

router.get('/listele',(req,res)=>{
  res.render('musteriListele');
});


module.exports = router;
