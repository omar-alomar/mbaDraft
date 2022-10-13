const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    email: String,
    tel: String,
})