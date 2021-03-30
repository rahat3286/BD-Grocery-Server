const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
const port = process.env.PORT || 5000;
// console.log(process.env.DB_USER)
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')

    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.79vii.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
    // console.log(uri);
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        console.log('connection error', err)
        const eventCollection = client.db("freshValley").collection("products");
        console.log('database connected succefully');
        // perform actions on the collection object
        // client.close();
    });

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})