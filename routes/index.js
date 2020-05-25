const express = require('express');
const router = express.Router();

//Models
const Customer = require('../models/Customer');
const Room = require('../models/Room');
const User = require('../models/Users');

router.get('/', (req, res) => {
  res.render('index',{ isAdmin:req.session.isAdmin, isUser: req.session.isUser });

});

router.get('/destroy', (req, res) => {
  req.session.destroy((err)=>{
    res.render('index', { isAdmin:req.session.isAdmin, isUser: req.session.isUser })
    if(err){
      res.json(err)
    }
  });
});

router.get('/iletisim', (req, res, next) => {
    res.render('iletisim',{isAdmin: req.session.isAdmin, isUser: req.session.isUser });
});

router.get('/kaydol', (req, res, next) => {
  if(req.session.isAdmin || req.session.isUser){
    res.render('index', {isAdmin:req.session.isAdmin, isUser: req.session.isUser})
  }
  else{
    res.render('kaydol',{ isAdmin:req.session.isAdmin, isUser: req.session.isUser});
  }
});

router.post('/kaydol',(req,res)=>{
  const promise=User.insertMany({
    username: "customer1",
    pass:"surname1"
   });

  promise.then((user)=>{
    res.json(user)
  }).catch((err)=>{
    res.json(err);
  });
});


router.get('/oturum', (req, res, next) => {
  res.render('oturum',{ isAdmin:req.session.isAdmin, isUser: req.session.isUser});
});

router.post('/oturum', (req, res, next) => {
  const data = req.body;
  const promise=User.findOne({ username:data.username , pass:data.pass });
  //oda numarasına göre sıralar
  promise.then((user)=>{
    if(user){
      req.session.isUser=true; 
      req.session.isAdmin=false;
      if(user.isAdmin===true){
        req.session.isAdmin=true; //admindir
        //res.send(req.session.isAdmin)
        res.render('index', { isAdmin: req.session.isAdmin, isUser : req.session.isUser } )
      }
      else{
        res.render('index', { isUser : req.session.isUser, isAdmin: req.session.isAdmin  } )
      }
    }
    else{
      req.session.isUser=false;
      res.render('oturum', { oturumHatasi :"Bilgiler yanlış veya Yok", isUser : req.session.isUser, isAdmin: req.session.isAdmin });
    }
  }).catch((err)=>{
    res.json(err);
  });


});



router.get('/newcustomer', (req, res) => {
  const customer = new Customer({
      name:"falan kişi",
      surname:"filan soyad",
      tcno: "11111111111",
      telno: "0555 555 55 55"
  });

  customer.save((err,data)=>{
      if(err)
      console.log(err);
      res.json(data);
  });
});

router.get('/newroom', (req, res) => {
  const room = new Room({
    no: 1,
    dailyPrice:50,
    renterId: "5eb803d283fa8636d038d99f",
    howManyBeds: 1
  });

  room.save((err,data)=>{
      if(err)
      console.log(err);
      res.json(data);
  });
});

router.get('/newuser', (req, res) => {
  const user = new User({
      username:"q",
      pass:"qwe",
      isAdmin: false
  });
  user.save((err,data)=>{
      if(err)
      console.log(err);
      res.json(data);
  });
});


module.exports = router;
