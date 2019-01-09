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
        if (req.body.queryResult.intent.displayName.trim() == "demo") {

        console.log("The endpoint is: " + JSON.stringify(req.body, null, 0));

        var obj;
        obj = {
            "fulfillmentText": "I live in Surat"
        }
        res.status(201).json(obj);
        module.exports = router;

    }




    }












