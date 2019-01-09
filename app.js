const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



    app.get('', function(req, res){
        res.status(200).send("Myles chatbot");
    });


    app.post('/chatbotmyles', function(req, res){

        
        console.log("The endpoint is: " + JSON.stringify(req.body, null, 0));


        console.log("Response: ",res)
        if (req.body.queryResult.intent.displayName.trim() == "home") {


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




