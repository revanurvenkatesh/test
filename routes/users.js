var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2"
});



var table = "items-en";
var docClient = new AWS.DynamoDB.DocumentClient();
/* GET users listing. */
router.post('/', function(req, res, next) {
    var body = req.body;

    res.set('Content-Type', 'text/plain')
    res.send(`You sent: ${body} to Express`)
    console.log('crazy happening!!!' + body.length );
    for(var i = 0; i < body.length; i++) {
        var obj = body[i];
        var params = {
            TableName:table,
            Item:{
                "itemid":obj["itemid"],
                "itemname": obj["itemname"],
                "itemssupplied": obj["itemssupplied"],
                "monthpurchased": obj["monthpurchased"],
                "itemsspoiled": obj["itemsspoiled"]
            }
        };
    
        console.log("Adding a new item...");
        docClient.put(params, function(err, data) {
            if (err) {
                console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                console.log("Added item:", JSON.stringify(data, null, 2));
            }
        });
    }

});


module.exports = router;