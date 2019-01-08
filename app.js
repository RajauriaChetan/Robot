const express = require('express');
const app = express();
const port = process.env.port||3000;

//app.get('/', (req, res) => res.send('My Name is Chetan Rajauria.'))

const dialogflow = require('dialogflow');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("", function(req, res){
    res.status(200).send("Myles chatbot");
})

app.get('/chatbotmyles', function (req, res) {
    res.sendFile('Index.html', { root: __dirname });
});

function ultaseedhamethod(greet)
{
    console.log(greet);
}

ultaseedhamethod("cHeTaN")
app.listen(port, () => console.log('Example app listening on port ${port}!'))











