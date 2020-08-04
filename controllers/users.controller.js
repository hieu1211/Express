var db = require('../db.js');
var shortid = require('shortid');
module.exports = {
	index: (request,response) => {
	response.render("./users/index",{
		users: db.get('users').value()
		});
	},

	create: (request,response) => {
		response.render("./users/create");
	},

	search: (request,response)=>{
		var q = request.query.q;
		var result = db.get('users').value().filter((user)=>user.name.indexOf(q)!=-1);
		response.render("./users/index",{
			users: result,
			q:q
			});
	},

	get: (req,res)=>{
		var result = db.get('users').find({id: req.params.id}).value();
		res.render("./users/view",{
			user: result
		})
	},

	postCreate: (req, res)=>{
		var errors = [];

		var user = db.get('users').find({name: req.body.name}).value();
		if(user)
			errors.push("User name exists!");

		user = db.get('users').find({email: req.body.email}).value();
		if(user)
			errors.push("Email exists!");

		if(req.body.password !== req.body.repassword)
			errors.push("Repassword doesn't match");

		if(errors.length){
			res.render('./users/create',{
				errors:errors,
				value:req.body
			})
			return;
		}

		req.body.id = shortid.generate();
		db.get('users').push(req.body).write();
		res.redirect('/users');
	}
}