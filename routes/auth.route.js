var express = require("express");
var router = express.Router();
var controller = require('../controllers/auth.controller.js');
var validate = require('../middleware/validate/login.validate.js');

router.get('',(req,res)=>{
	res.redirect('/auth/login');
})
router.get('/login', controller.get);
router.post('/login',validate.postLogin, controller.post);
router.get('/logout',controller.logout);
module.exports = router;