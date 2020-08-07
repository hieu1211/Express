var db = require('../db');
module.exports.requireLogin = (req,res,next)=>{
	if(!req.signedCookies){
		res.redirect("/auth/login");
		return;
	}
	var user = db.get('users').find({id: req.signedCookies.userid}).value();
	if(!user){
		res.redirect("/auth/login");
		return;
	}
	next();
}
