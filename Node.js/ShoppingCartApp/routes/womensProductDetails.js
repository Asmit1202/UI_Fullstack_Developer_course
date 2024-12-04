var express = require('express');
var router = express.Router();
var mongoDbDetails =  require("./common/dbConnectionDetails");

router.get('/', function(req, res, next) {
    var productDetails = {
        pdata : []
    }
    mongoDbDetails.getConnectToCollection("womens", "find", {}).then((result) => {
        productDetails.pdata = result;
        res.send(JSON.stringify(productDetails));
    });
});

module.exports = router;