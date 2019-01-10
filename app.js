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
        if (req.body.queryResult.intent.displayName.trim() == "talks") {


    var parametersArr = req.body.queryResult.parameters.talks;
    var parametersLength = parametersArr.length;
    var obj;
    console.log("Params Arr: ",parametersArr);
    console.log("Parameters Length: ",parametersLength);

    if (parametersArr[0].trim() == "name")
    {
        obj = {
            "fulfillmentText": "My name is Alexa"
        }
    }
    else if (parametersArr[0].trim() == "do")
    {
        obj = {
            "fulfillmentText": "I work in Carzonrent"
        }
    }
    else if (parametersArr[0].trim() == "how")
    {
        obj = {
            "fulfillmentText": "I am fine dear. How about you?"
        }
    }

    else if (parametersArr[0].trim() == "who")
    {
        obj = {
            "fulfillmentText": "I am your friend :)"
        }
    }

    
    else
    {
        obj = {
            "fulfillmentText": "Sorry! I missed it. Can you pleae repeat it again?"
        }
    }
        res.status(201).json(obj);
        }
    });


    app.listen(port);

    console.log("This App is under development!")




