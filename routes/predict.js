var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2"
});



var table = "items-hmmmm";
var docClient = new AWS.DynamoDB();
var params = {
    TableName:table
};
abcd = docClient.scan(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        //console.log("Added item:", JSON.stringify(data, null, 2));
        abcd = data;
    }
});

// console.log('----------------------------------');
// console.log(abcd);
// console.log('----------------------------------');


/* GET users listing. */
router.get('/', function(req, res, next) {
        var l = 0;
        console.log("Adding a new item...");
        soln = []
        console.log('[[[[[[[[[[[[[[[[[[[[[[[[[[');
        console.log(abcd.Items.length);
        while(l < abcd.Items.length){
            a = abcd.Items[l];
            console.log(a['itemssupplied']['N']);
            soln.push(a['itemssupplied']['N'] - a['itemsspoiled']['N']);
            l += 1;
        }
        res.send(soln);

});


module.exports = router;