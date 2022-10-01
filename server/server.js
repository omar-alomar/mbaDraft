const express = require('express');
const app = express();
const cors = require('cors');

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
})
