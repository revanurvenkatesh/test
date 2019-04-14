var AWS = require("aws-sdk");

AWS.config.update({
  region: "us-west-2"
});

var dynamodb = new AWS.DynamoDB();

var params = {
    TableName : "items-hmmmm",
    KeySchema: [       
        { AttributeName: "itemid", KeyType: "HASH"}, 
        { AttributeName: "itemname", KeyType: "HASH" },  
        { AttributeName: "itemssupplied", KeyType: "HASH" }, 
        { AttributeName: "monthpurchased", KeyType: "HASH" }, 
        { AttributeName: "itemsspoiled", KeyType: "HASH" }
    ],
    AttributeDefinitions: [       
	{ AttributeName: "itemid",  AttributeType: "N" }, 
        { AttributeName: "itemname",  AttributeType: "S"  },  
        { AttributeName: "itemssupplied",  AttributeType: "N"  }, 
        { AttributeName: "monthpurchased", AttributeType: "S" }, 
        { AttributeName: "itemsspoiled", AttributeType: "N" }
    ],
    ProvisionedThroughput: { /* required */
        "NumberOfDecreasesToday": 0,
            "WriteCapacityUnits": 5,
            "ReadCapacityUnits": 5 
      }
};

dynamodb.createTable(params, function(err, data) {
    if (err) {
        console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
    }
});

