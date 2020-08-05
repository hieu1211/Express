var db = require('../db.js');

module.exports.get = (req,res)=>{
	var page = req.query.page || 1;
	var perPage = 8;
	var start = (page-1)*perPage;
	var end = page*perPage;
	res.render('./products/index',{
		value: db.get('products').value().slice(start,end),
		page:parseInt(page),
		sumPage: parseInt(db.get('products').value().length/8+1)
	});
}