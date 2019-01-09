const express = require('express');
const app = express();
const port = process.env.port||3000;
const router = express.Router();

//app.get('/', (req, res) => res.send('My Name is Chetan Rajauria.'))

const dialogflow = require('dialogflow');

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => console.log('Example app listening on port ${port}!'))

app.get('/chatbotmyles', function (req, res) {
    console.log(res)
    
    });

    app.get("", function(req, res){
        res.status(200).send("Myles chatbot");
    })


    router.post('', function (req, res) 
    {

        console.log("in the weather endpoint: " + JSON.stringify(req.body, null, 0));

        var obj;
        obj = {
            "fulfillmentText": "Sir, Price is from customer's side only, We will provide the vehicle with the full tank and customer also need to return with full tank"
        }
        res.status(201).json(obj);
        module.exports = router;

    }



    }












