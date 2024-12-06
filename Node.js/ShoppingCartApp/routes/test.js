var express = require('express');
var router = express.Router();

router.post('/', function(req, res, next) {
    console.log(req.body);
    console.log(req.query);
  res.send(JSON.stringify({msg : "Sucess"}));
});

module.exports = router;