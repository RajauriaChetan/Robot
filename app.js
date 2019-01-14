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
            "fulfillmentText": "Ahhh, The minimum package is we currently offer 3 packages for 120 km, 240 km and Unlimited"
        }
    }

    else if (parametersArr[0].trim() == "price")
    {
        obj = {
            "fulfillmentText": "The price is approx 3499 INR Rs"
        }
    }

    else if (parametersArr[0].trim() == "discount")
    {
        obj = {
            "fulfillmentText": "We provide discount for that you need to use the Coupon Codes."
        }
    }

    else if (parametersArr[0].trim() == "calculate")
    {
        obj = {
            "fulfillmentText": "We have different pricing plans basis how many kilometers you plan to drive."
        }
    }

    else if (parametersArr[0].trim() == "extra")
    {
        obj = {
            "fulfillmentText": "If you drive more kilometers than what was billed to you, you will be charged extra basis the additional km charge for the specified car model and city."
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

