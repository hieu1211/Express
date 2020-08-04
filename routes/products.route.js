var express = require("express");
var router = express.Router();
var controller = require('../controllers/products.controller.js');

router.get('', controller.get);

module.exports = router;