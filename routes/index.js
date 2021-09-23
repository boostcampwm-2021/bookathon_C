let express = require('express');
let router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public/html/main.html'));
});

module.exports = router;