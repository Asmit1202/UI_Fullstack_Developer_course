const { MongoClient } = require('mongodb');
var dbUrl = 'mongodb://localhost:27017';
const client = new MongoClient(dbUrl);

var mongodbConnectionDetails = {
    getConnectToCollection(collectionName, qtype, data) {
        getClientRef();
        const db = client.db("Shopping_Cart");
        const collection = db.collection(collectionName);
        if (qtype == 'finduser') {
            return collection.find({accountId: data.accountId}).toArray();
        }
        else if (qtype == 'insert') {
            return collection.insertOne(data);
        } 
        else if (qtype == 'find') {
            return collection.find(data).toArray();
        }
    }
}
async function getClientRef() {
    await client.connect();
}

module.exports = mongodbConnectionDetails;