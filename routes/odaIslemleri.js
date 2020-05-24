const express = require('express');
const router = express.Router();

//models
const Room=require('../models/Room');

router.get('/listele',(req,res,next)=>{
  const promise=Room.find({ }).sort({'no' : 1 });

  promise.then((room)=>{
   res.render("odaListele", {room, isAdmin:req.session.isAdmin } );
  }).catch((err)=>{
    res.json(err);
  })
});

router.get('/new', function(req, res, next) {
    const room = new Room({
      no:101,
      dailyPrice:200,
      renterId:"5ebc1384d5cf0d124ce2b7b1"
    });

    room.save((err,data)=>{
        if(err)
        console.log(err);
        res.json(data);
    });

});

router.post('/',(req,res)=>{
  const data=req.body;

   if(data.yeni_odaNo){
    const room = new Room({
      no:data.yeni_odaNo,
      dailyPrice:data.yeni_odaGunlukUcret,
      capacityOfTheRoom: data.yeni_odaKapasite
    });
    room.save((err,data)=>{
        if(err)
        console.log(err);
        res.json(data);
    });
  }

  if(data.guncelle_ucret){
    const promise=Room.findOneAndUpdate({
      no: data.guncelle_odaNo
    },{
      dailyPrice:data.guncelle_ucret,
      capacityOfTheRoom:data.guncelle_odaKapasite
    });
    
    promise.then((room)=>{
      res.json({ room });
    })
    .catch((err)=>{
      res.json(err);
    });
  }

});

router.get('/ekle',(req,res)=>{
  res.render('odaEkle',{ isAdmin:req.session.isAdmin});
});

router.post('/ekle',(req,res)=>{
  const promise=Room.insertMany({
    no:200
   });

  promise.then((room)=>{
    res.json(room)
  }).catch((err)=>{
    res.json(err);
  });
});




router.get('/guncelle',(req,res)=>{
  const promise=Room.find({ });
  promise.then((rooms)=>{
    res.render('odaGuncelle',{rooms, isAdmin:req.session.isAdmin});
    return rooms
  }).catch((err)=>{
    res.json(err);
  });
});

router.post('/guncelle',(req,res)=>{
  const data=req.body;

  const promise=Room.updateOne({ 
    no: 104 
  },
  {
    no:111,
    dailyPrice:111,
    capacityOfTheRoom: 11
  });

  promise.then((room)=>{
    res.json(room)

  }).catch((err)=>{
    res.json(err);
  })
});

router.post('/sil',(req,res)=>{
  const promise = Room.findOneAndDelete({
    no: 200
  });

  promise.then((room)=>{
    res.json(room);
  }).catch((err)=>{
    res.json(err);
  });
});



module.exports = router;
