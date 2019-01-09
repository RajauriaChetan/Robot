const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

//app.get('/', (req, res) => res.send('My Name is Chetan Rajauria.'))


var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/chatbotmyles', function (req, res) {
//     console.log(res)
    
//     });

    app.get("", function(req, res){
        res.status(200).send("Myles chatbot");
    })


    app.post('/chatbotmyles', function (req, res){

        
        if (req.body.queryResult.intent.displayName.trim() == "home") {

        console.log("The endpoint is: " + JSON.stringify(req.body, null, 0));

        var obj = {
            "fulfillmentText": "I am going to Delhi."
        }
        res.status(201).json(obj);

        }else{
        var obj = {
            "fulfillmentText": "Can you rephrase what you just said?!"
        }
        res.status(201).json(obj);
        
        }
    });



    app.listen(port);

    console.log("This Appjs is live!")




