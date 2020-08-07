var db = require('../db.js');

module.exports.addToCart = (req,res,next)=>{
	var temp = req.params.productIdAndPage.split('page');
	var productId = temp[0];
	var page = temp[1];
	var sessionId = req.signedCookies.sessionid;
	if(!sessionId){
		res.redirect('/products');
		return;
	}
	var count = db.get('session').find({id: sessionId}).get('cart.'+productId,0).value();
	db.get('session').find({id: sessionId}).set("cart."+productId, count+1).write();
	res.redirect('/products?page='+page);
}

module.exports.get = (req, res)=>{
	var cart = [];
	var sessionId = req.signedCookies.sessionid;
	if(sessionId){
		var session = db.get('session').find({id: sessionId}).value();
		var index=0;
		for(var productid in session.cart){
			var product = db.get('products').find({id: productid}).value();
			cart.push(product);
			cart[index].count = session.cart[productid];
			index++;
		}
		res.render('./cart/cart',{
			cart:cart
		})
	}
	res.redirect('./cart');
}