var express = require('express');
var router = express.Router();
var mongoDbDetails =  require("./common/dbConnectionDetails");

const bcrypt = require('bcrypt');
const saltRounds = 10;
// const sensitiveData = 'Sample1234';

// bcrypt.hash(sensitiveData, saltRounds, function(err, hash) {
//     console.log("Encrypted Data: ");
//     console.log(hash);
// });

router.post('/', function(req, res, next) {
    var resObj = {};  

    bcrypt.hash(req.body.accountPassword, saltRounds, function(err, hash) {
        req.body.accountPassword = hash;
        mongoDbDetails.getConnectToCollection("userAccountDetails", "insert", req.body).then((result) => {

            resObj.msg = 'Inserted Successfully';
            res.send(JSON.stringify(resObj));        
        }).catch((error) => {
            resObj.msg = 'Error While Inserting';
            res.send(JSON.stringify(resObj));
        })
    });
});


module.exports = router;
