const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const connect = async () => {
    let result = await client.connect();
    let dab = result.db('AuthDB');


}
module.exports = { connect };