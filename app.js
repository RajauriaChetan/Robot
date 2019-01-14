const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

    app.get('', function(req, res){
        res.status(200).send("Chetan - Function Called...");
    });

    app.post('/chatbotmyles', function(req, res){

    console.log("The endpoint is: " + JSON.stringify(req.body, null, 0));


    var parametersArr = req.body.queryResult.parameters.PolicyPrice;
    var obj;
    console.log("Params Arrrrrrrrrrrrrr: ",parametersArr);

        if (req.body.queryResult.intent.displayName.trim() == "Policy") {

    var parametersArr = req.body.queryResult.parameters.PolicyPrice;
    var parametersLength = parametersArr.length;
    var obj;
    console.log("Params Arr: ",parametersArr);

    if (parametersArr[0].trim() == "kms" || parametersArr[0].trim() == "unlimited" || parametersArr[0].trim() == "rates" || parametersArr[0].trim() == "book")
    {
        obj = {
            "fulfillmentText": "We currently offer 3 packages for 120 km, 240 km and Unlimited"
        }
    }
    else if (parametersArr[0].trim() == "packages" || parametersArr[0].trim() == "different")
    {
        obj = {
            "fulfillmentText": "In 120 Km & 240 Km Additional km driven on these two packages will be charged at Rs. 11, 12 and 14 per km (depending on car category)"
        }
    }
    else if (parametersArr[0].trim() == "minimum")
    {
        obj = {
            "fulfillmentText": "Ahhh, The minimum offer is we currently offer 3 packages for 120 km, 240 km and Unlimited"
        }
    }
    else
    {
        obj = {
            "fulfillmentText": "I am trying very hard to learn it."
        }
    }

    //
        res.status(201).json(obj);
        }
    });

    app.listen(port);

    console.log("This App is under development!")

