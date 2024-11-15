var express = require("express");

var router = express.Router();

router.get('/', (req, res)=>{
    var stdDetails= {
        name: "Asmit",
        age: 40
    }
    res.send(JSON.stringify(stdDetails));
});

module.exports = router;