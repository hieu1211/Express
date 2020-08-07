var shortid = require('shortid');
var db = require('../db.js');

module.exports = (req, res, next)=>{
	if(!req.signedCookies.sessionid){
		var sessionid = shortid.generate();
		res.cookie("sessionid",sessionid,{signed: true});
		db.get('session').push({id:sessionid}).write();
	}
	next();
}