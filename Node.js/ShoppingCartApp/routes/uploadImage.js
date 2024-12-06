var express = require('express');
var router = express.Router();
var multer = require("multer");
var path = require("path");


var file_path;
const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './public/images/');
    },
    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, callback) { 
        file_path = "productImage_"+ Date.now()+ "_" + file.originalname;
        callback(null, file_path);
    }
});

var upload = multer({ storage: storage}).single('prodImage');

router.post('/', function(req, res, next) {
    var resObj = {};
    upload(req, res, function(err) {
        if (err) {
            resObj.msg = "ERROR"
            console.log(err);
        } else {
            resObj.file_path = '/images/' + file_path;
            resObj.msg = 'success';
        }
        res.send(JSON.stringify(resObj));
    });
});

module.exports = router;