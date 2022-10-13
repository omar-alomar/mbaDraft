const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const uri = "mongodb+srv://admin:admin@mbadraft.ipntxsb.mongodb.net/?retryWrites=true&w=majority";

const { Contact } = require('./Contact')

const app = express();


app.use(express.json());

app.post('/addContact', async (req, res) => {
    const newContact = new Contact({ ...req.body })
    const insertedContact = await newContact.save()
    return res.status(201).json(insertedContact)
})

// app.get('/getContacts', (req, res) => {


// })

const start = async () => {
    app.use(
        cors({
            origin: 'http://localhost:3000'
        })
    )
    try {
        await mongoose.connect(uri);
        app.listen(8081, () => console.log("Server started on port 8081"));
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start();

