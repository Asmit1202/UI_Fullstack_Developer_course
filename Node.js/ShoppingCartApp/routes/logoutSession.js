var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  req.session.destroy();

  res.send(JSON.stringify({msg: 'Done'}))
});

module.exports = router;
