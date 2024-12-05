var express = require('express');
var router = express.Router();
var mongoDbDetails =  require("./common/dbConnectionDetails");


router.get('/', function(req, res, next) {
    var reqFilter = req.query;

    var userFilterQueryObj = {};
    
    if (Object.keys(reqFilter).length > 0) {
        if (reqFilter.priceRange) {
            userFilterQueryObj.price = {
                $lt: parseInt(reqFilter.priceRange)
            }
        }
        if (reqFilter.selectedCategory && reqFilter.selectedCategory.length) {
            userFilterQueryObj.type = {
                $in: reqFilter.selectedCategory
            }
        }
        if (reqFilter.selectedTypes && reqFilter.selectedTypes.length) {
            userFilterQueryObj.Category = {
                $in: reqFilter.selectedTypes
            }
        }
        if (reqFilter.selectedBrand && reqFilter.selectedBrand.length) {
            userFilterQueryObj.brand = {
                $in: reqFilter.selectedBrand
            }
        }
        if (reqFilter.selectedDiscount && reqFilter.selectedDiscount.length) {
            userFilterQueryObj.discountPercent = {
                $lt: parseInt(reqFilter.selectedDiscount)
            }
        }
        if (reqFilter.id) {
            userFilterQueryObj.id = reqFilter.id
        }
    }  

    var productDetails = {
        pdata : []
    }
    mongoDbDetails.getConnectToCollection("productDetails", "find", userFilterQueryObj).then((result) => {
        productDetails.pdata = result;
        res.send(JSON.stringify(productDetails));
    });
});

module.exports = router;
