var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.json([
    {
    "address": "jdhfkudhusdhusdhusdhudshguids",
    "long" : -180.223,
    "lat" : 30
   }]);

});


module.exports = router;
