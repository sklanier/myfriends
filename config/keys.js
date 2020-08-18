const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:<password>@cluster0.wxxjw.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

module.exports = {
  mongoURI: "mongodb+srv://admin:053zwkEGGYnGG3G4@cluster0.wxxjw.mongodb.net/myfriends?retryWrites=true&w=majority",
  secret: 'secret'
}