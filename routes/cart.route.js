var express = require("express");
var router = express.Router();
var controller = require('../controllers/cart.controller.js');

router.get('/add/:productIdAndPage',controller.addToCart);
router.get('/',controller.get);

module.exports = router;
