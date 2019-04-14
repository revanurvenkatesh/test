var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var sqlite = require("better-sqlite3");
var db = new sqlite("./db/db.db");

var rows = db.prepare("SELECT * FROM shops").all();
console.log(rows);
var AWS = require("aws-sdk");


router.get('/', function(req, res, next) {
  
  res.json(rows);

});


module.exports = router;
