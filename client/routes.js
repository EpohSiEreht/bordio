// ~~~~~~~~~~MODULES~~~~~~~~~~~~~ //
var express = require('express');
var router = express.Router();

// ~~~~~~~~~~GET ROUTE~~~~~~~~~~~~~ //
router.get('/', function(req, res) {
  res.render('index');
});

// ~~~~~~~~~~EXPORT~~~~~~~~~~~~~ //
module.exports = router;