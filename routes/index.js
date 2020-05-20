const express = require('express');
const router = express.Router();

//Models
const Customer = require('../models/Customer');
const Room = require('../models/Room');

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
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

router.post('/',(req,res)=>{
  res.json({status:1});
});


module.exports = router;
