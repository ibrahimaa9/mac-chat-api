import mongodb from 'mongodb';

export default {
  // "port": 3005,
  // "mongoUrl": "mongodb://localhost:27017/chat-api",
  "port": process.env.PORT,
  "mongoUrl": "mongodb://ibrahim:pro97@sualfdb-shard-00-00-vmvjj.mongodb.net:27017,sualfdb-shard-00-01-vmvjj.mongodb.net:27017,sualfdb-shard-00-02-vmvjj.mongodb.net:27017/admin?replicaSet=SualfDB-shard-0&ssl=true"
  "bodyLimit": "100kb"
}
