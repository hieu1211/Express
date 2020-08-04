var db = require('../db.js');
var md5 = require('md5');

module.exports.post = (req, res) =>{
	var email = req.body.email;
	var user = db.get('users').find({email: email}).value();
	var errors = [];
	if(!user){
		errors.push("Email doesn't exist!");
		res.render('./auth/login',{
			errors:errors,
			value:req.body
		});
		return;
	}
	hashedPassword = md5(req.body.password);
	if(user.password !== hashedPassword){
		errors.push("Password is wrong!");
		res.render('./auth/login',{
			errors:errors,
			value:req.body
		});
		return;
	}
	res.cookie("userid",user.id,{signed: true});
	res.redirect('/users');
}

module.exports.get = (req, res)=>{
	var unlogin = true;
	res.render('./auth/login',{
		unlogin:unlogin
	});
}

module.exports.logout = (req,res)=>{
	console.log(req.cookies);
	res.cookie('userid',"",-1);
	res.redirect('/auth/login');
}