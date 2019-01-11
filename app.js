const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

    app.get('', function(req, res){
        res.status(200).send("Myles chatbot");
    });

    app.post('', function(req, res){

        console.log("The endpoint is: " + JSON.stringify(req.body, null, 0));

    console.log("Url is : ",req.baseUrl)

        if (req.body.queryResult.intent.displayName.trim() == "Alarms") {

    var parametersArr = req.body.queryResult.parameters.talks;
    //var parametersLength = parametersArr.length;
    var obj;
    console.log("Params Arr: ",parametersArr);
    //console.log("Parameters Length: ",parametersLength);

    if (parametersArr[0].trim() == "hi")
    {
        obj = {
            "fulfillmentText": "Oh Hi! My name is Alexa. How can I help you?"
        }
    }
    
        res.status(201).json(obj);
        }
    });

    app.listen(port);

    console.log("This App is under development!")

