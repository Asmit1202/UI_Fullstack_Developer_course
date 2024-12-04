var express = require('express');
var router = express.Router();
var mongoDbDetails =  require("./common/dbConnectionDetails");
const bcrypt = require('bcrypt');

router.post('/', function(req, res, next) {
    var responseObj;
  
    mongoDbDetails.getConnectToCollection("userAccountDetails", "finduser", req.body).then((result) => {
        if (result.length == 0) { 
            responseObj = {msg: 'Invalid'};
        } else {
            bcrypt.compare(req.body.accountPassword, result[0].accountPassword, function(err, result) {
                if (result) {
                    // req.session.isLoggedinUser = true;
                    // req.session.loggedInUserId = req.body.accountId;
                    responseObj = {msg: 'Valid details'};
                } else {
                    // req.session.isLoggedinUser = false;
                    responseObj = {msg: 'Invalid'};
                }
                res.send(JSON.stringify(responseObj));
            });
        }
    });
    
});

module.exports = router;
