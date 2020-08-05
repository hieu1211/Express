require('dotenv').config();
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var usersRouter = require('./routes/users.route.js');
var authRouter = require('./routes/auth.route.js');
var productsRouter = require('./routes/products.route.js');
var requireLogin = require('./middleware/requireLogin.js');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.COOKIES_KEY));

app.set('view engine','pug');
app.set('views', './views');

app.use(express.static('css'));
app.use('/users',requireLogin.requireLogin, usersRouter);
app.use('/index', (req, res)=>{
	res.render('./layout/nav-bar');
})
app.use('/auth', authRouter);
app.use('/products', productsRouter);
app.listen(3000,()=>{
	console.log("ok port 3000");
})