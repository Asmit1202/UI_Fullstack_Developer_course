db.collection('collectionname').insertMany([Array of objects]) - Inserting multipe documents

db.collection('collectionname').insertOne({object}) - Inserting single document 

db.collection("collectioname").find({}) - Returns list of all the documents

db.collection("collectioname").find({schoolName: 'abc'}) - Find with where condition 

db.collection("collectioname").find({schoolName: 'abc', loc: 'hyd'}) - Using AND clause 


db.collection("collectionname").find({empDep: {$in: ['IT', 'HR', 'Developer']}}) - Using OR Clause
{user_prasad: {$exists:true}} // To check for if key existis

db.collection("collectioname").find({price: {$lt: 2000}}) - $lt and $gt clause 

db.collection("collectioname").find({price: {$lt: 2000}, price:{$gt: 4000}}) - $lt and $gt clause 

db.collection('collectioname').find({
  $or: [{ status: 'A' }, { qty: { $lt: 30 } }]
});   -$or


db.collection(collectionname).find({"user_prasad": {$exists:true}}) // is the key with value exists or not 

db.collection.updateOne(
  { _id: response[0]._id },
  {
      $set: newDetails
  }
)

db.collection('collectioname').find({
    status: 'A',
    $or: [{ qty: { $lt: 30 } }, { item: { $regex: '^p' } }]
  });   - Both OR and AND

