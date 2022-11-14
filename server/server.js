const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const uri = "mongodb+srv://admin:admin@mbadraft.ipntxsb.mongodb.net/mbaDraft?retryWrites=true&w=majority";



//const { ContactSchema } = require('./ContactSchema')

const app = express();
app.use(cors())


const ContactSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    email: String,
    tel: String,
})

const Contact = mongoose.model('Contact', ContactSchema);



app.use(express.json());

app.post('/addContact', async (req, res) => {
    const newContact = new Contact({ ...req.body })
    const insertedContact = await newContact.save()
    return res.status(201).json(insertedContact)
})

app.get('/getContacts', (req, res) => {
    Contact.find({fname: "abooik"}, "fname", (err, contacts) => {
        if (err) return handleError(err);
    })
    .then(p => console.log(p))
    .catch(error => console.log(error))
})

const start = async () => {
    // app.use(
    //     cors({
    //         origin: 'http://localhost:3000'
    //     })
    // )
    try {
        await mongoose.connect(uri);
        app.listen(8081, () => console.log("Server started on port 8081"));
    } catch (error) {
        console.error(error);
        process.exit(1);
    }

    // try {
    //     const testcontact = new Contact({
    //     lName: zib,
    //     fName: zob,
    //     tel: "5356656636",
    //     email: "zibzob@gmail.com"
    // })
    // } catch (e) {
    //     console.log(e.message)
    // }
    
};

start();

