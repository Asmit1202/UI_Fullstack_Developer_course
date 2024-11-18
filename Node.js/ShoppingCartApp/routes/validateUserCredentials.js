var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
    var resopnseObj;
    if (req.query.accountId == "admin" && req.query.accountPassword == "sample12"){
        resopnseObj = {msg: "Valid Details"};
    } else {
        resopnseObj = {msg: "Invalid"};
    }
    res.send(JSON.stringify(resopnseObj));
});

module.exports = router;