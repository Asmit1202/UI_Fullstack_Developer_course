var express = require("express");
var router = express.Router();
var { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

router.post("/", (req, res) => {
    var resopnseObj;
    console.log("req.body");
    console.log(req.body);

    getDbConnection(req.body).then((result) => {
        console.log("result");
        console.log(result);
        if(result.length == 0){
            resopnseObj = {msg: "Invalid"};
        }
        else{
            resopnseObj = {msg: "Valid Details"};
        }

        res.send(JSON.stringify(resopnseObj));
    }).catch((err) => {

    });
});

async function getDbConnection(userData) {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db("Shopping_Cart");
    const collection = db.collection('userAccountDetails');
  
    return collection.find(userData).toArray();
  
  }

module.exports = router;