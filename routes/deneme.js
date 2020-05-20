const express = require('express');
const router = express.Router();

//Models
const Customer = require('../models/Customer');
const Room = require('../models/Room');


router.get('/',(req,res)=>{
  let room;

    const promise=Customer.find({ });

    promise.then(Room.find({ },(err,data)=>{
      room=data;
      //console.log(oda[0].no); 
    }))
    
    .then((customer)=>{
      res.render('deneme', { customer ,  room   });
    })
    .catch((err)=>{
      res.json(err);
    });
  
  });


  // router.get('/:ad',(req,res)=>{
  //   const ad=req.params.ad;
  //   console.log(ad);
  
  // });






  router.post('/',(req,res)=>{
    res.end("post calisti")
  });

router.delete('/',(req,res)=>{
  res.end("delete calisti")
});

router.put('/',(req,res)=>{
  res.end("put calisti")
});




module.exports = router;