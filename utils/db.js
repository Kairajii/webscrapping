const {MongoClient} = require('mongodb');

// Connection URL
const url = 'mongodb+srv://tusharkaira:tusharkaira123@blog-app.h2gepmu.mongodb.net/';
const client = new MongoClient(url);


const dbName = 'scrapping';

async function insertToDB(doc) {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('headings');
  await collection.insertOne(doc)
}

module.exports = {insertToDB};
