const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://admin:admin@mbadraft.ipntxsb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


app.use(
    cors({
        origin: 'http://localhost:3000'
    })
)

app.use(express.json());

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})

app.post('/addContact', (req, res) => {
    const myObj = req.body
    console.log(myObj)
    res.send(myObj)

    try {
        const database = client.db('mbaDraft');
        const contacts = database.collection('contacts');
        contacts.insertOne(myObj)
    } finally {
        // Ensures that the client will close when you finish/error
        client.close();
    }
})
