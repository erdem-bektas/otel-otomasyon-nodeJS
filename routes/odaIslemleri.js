var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render("odaIslemleri", {title:"Merhabalar"});
});

router.post('/',(req,res)=>{
  res.send("naber")
});

module.exports = router;
