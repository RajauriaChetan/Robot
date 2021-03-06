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

    var parametersArr;
    var parametersLength;
    var obj;

        if (req.body.queryResult.intent.displayName.trim() == "Policy") {

            var parametersArr = req.body.queryResult.parameters.PolicyPrice;
            var parametersLength = parametersArr.length;

            console.log("Policy Arr: ",parametersArr);

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

             else if (parametersArr[0].trim() == "mode" || parametersArr[0].trim() == "payment" || parametersArr[0].trim() == "card")
              {
                obj = {
                    "fulfillmentText": "If you drive more kilometers than what was billed to you, you will be charged extra basis the additional km charge for the specified car model and city."
                }
            }

            else if (parametersArr[0].trim() == "limited")
            {
                obj = {
                    "fulfillmentText": "In unlimited Km package you may drive any number of kilometers"
                }
            }
            else
            {
                obj = {
                    "fulfillmentText": "I am trying very hard to learn it."
                }
            }
        }
 
        else if (req.body.queryResult.intent.displayName.trim() == "BookingConfirmation"){

            var parametersArr = req.body.queryResult.parameters.BookingConfirmation;
            var parametersLength = parametersArr.length;

            console.log("BookingConfirmation Arr: ",parametersArr);

            if (parametersArr[0].trim() == "booking" || parametersArr[0].trim() == "confirm" || parametersArr[0].trim() == "book" || parametersArr[0].trim() == "good" || parametersArr[0].trim() == "vehicle" || parametersArr[0].trim() == "security" ||parametersArr[0].trim() == "deposit" || parametersArr[0].trim() == "recieve" || parametersArr[0].trim() == "vehicle")
            {
                obj = {
                    "fulfillmentText": "Yes Sir, Your booking has been confirmed and we have received both the payment for rental & security deposit."
                }
            }
        }


        res.status(201).json(obj);


    });

    app.listen(port);

    console.log("This App is under development!")

