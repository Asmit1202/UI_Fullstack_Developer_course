var express = require('express');
var router = express.Router();
var mongoDbDetails =  require("./common/dbConnectionDetails");

router.post('/', function(req, res, next) {
    var resObj = {}; 
    
    mongoDbDetails.getConnectToCollection("productDetails", "insert", req.body).then((result) => {
        resObj.msg = 'Inserted Successfully';
        res.send(JSON.stringify(resObj));        
    }).catch((error) => {
        resObj.msg = 'Error While Adding Product';
        res.send(JSON.stringify(resObj));
    })
});

module.exports = router;
