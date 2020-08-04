module.exports.postCreate = function(req,res,next){
	var errors = [];
	if(!req.body.name)
		errors.push("User name is required!");
	if(!req.body.phone)
		errors.push("Phone number is required!");
	if(!req.body.email)
		errors.push("Email is required!");
	if(!req.body.password)
		errors.push("Password is required!");
	if(!req.body.repassword)
		errors.push("RePassword is required!");
	if(errors.length){
		res.render("create",{
			errors:errors,
			value:req.body
		})
	return;
	}
	next();
}