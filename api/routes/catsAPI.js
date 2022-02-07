var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("Cats API is up");
});

router.post("/convertage", function(req, res, next) {
    const age = req.body.age;
    res.send("Age in cat years is: " + parseInt(age)*15);
});

module.exports = router;