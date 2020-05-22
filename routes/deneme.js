'use strict'
const express = require('express');
const router = express.Router();
var cookieParser = require('cookie-parser');

//Models
const Customer = require('../models/Customer');
const Room = require('../models/Room');



router.get('/',(req,res)=>{

  if(!req.session.page_views){

    req.session.page_views=1;
    res.render('deneme',{ a : req.session.page_views } )
    console.log(req.session.page_views);
  }
    else{
    req.session.page_views+=1;

    res.render('deneme',{ a : req.session.page_views} );
    }


});


router.get('/backUp',(req,res)=>{
  let room;
    const promise=Customer.find({ });
    promise.then(Room.find({ },(err,data)=>{
      room=data;
    }))
    .then((customer)=>{
      res.render('deneme', { customer ,  room   });
    })
    .catch((err)=>{
      res.json(err);
    });
  });

    



router.post('/',(req,res)=>{
  res.end("post calisti")
});



module.exports = router;