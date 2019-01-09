const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

//app.get('/', (req, res) => res.send('My Name is Chetan Rajauria.'))

const dialogflow = require('dialogflow');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/chatbotmyles', function (req, res) {
//     console.log(res)
    
//     });

    app.get("", function(req, res){
        res.status(200).send("Myles chatbot");
    })


    app.post('', function (req, res){
        var objhhhhhh;

        console("The Intent name is : ",req.body.queryResult.intent.displayName)

        if (req.body.queryResult.intent.displayName.trim() == "home") {

        console.log("The endpoint is: " + JSON.stringify(req.body, null, 0));

        objhhhhhh = {
            "fulfillmentText": "I am going to Delhi."
        }
        res.status(201).json(objhhhhhh);
        }
    });



    app.listen(port, () => console.log('Example app listening on port ${port}!'))












