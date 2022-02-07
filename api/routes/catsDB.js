var express = require("express");
var router = express.Router();
var catModel = require("../models/Cats");

router.get('/', function(req, res){
    res.send("Database of cats");
});

router.get('/list', function(req,res){
    catModel.find({}, function(err, docs){
      if(err){
        res.send(err);
      }
      else{
        res.send(docs);
      }
  })
});

router.post('/add', function(req,res) {
    console.log(req.body);
    const cat = new catModel({
      catName: req.body.catName,
      catBreed: req.body.catBreed,
    });
    cat.save().then(val => {
      res.json({ msg: "Cat Added Successfully", val: val })
    })
  });

module.exports = router;