var express = require("express");
var app = express();

app.get('',(request,response)=>{
	response.send("<h1>Xin Chao<h1>");
});

app.get('/todolist',(request,response)=>{
	response.send("<ul><li>Item1</li><li>Item2</li><li>Item3</li></ul>");
});

app.listen(3000,()=>{
	console.log("ok port 3000");
})