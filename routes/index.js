const express = require('express');
const router = express.Router();

//Models
const Customer = require('../models/Customer');
const Room = require('../models/Room');
const User = require('../models/Users');

router.get('/', (req, res, next) => {
  res.render('index');
});
router.get('/iletisim', (req, res, next) => {
  res.render('iletisim');
});
router.get('/oturum', (req, res, next) => {
  res.render('oturum');
});
router.get('/kaydol', (req, res, next) => {
  res.render('kaydol');
});

router.post('/',(req,res)=>{
  res.json({status:1});
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
