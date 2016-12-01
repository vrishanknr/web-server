var express =require('express');
var app = express();
var port =3000;
var middleware = {
	requireAuthentication: function(req, res, next) {
		console.log('You are accessing private route');
		next();
		
	},
	logger: function (req, res, next) {
		console.log('Request'+' '+ new Date().toString()+' '+req.method+' '+req.originalUrl);
		next();
	}
};

//app.use(middleware.requireAuthentication);


app.use(middleware.logger);	

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send('About us');
	
});

app.use(express.static(__dirname +'/public'));
//console.log(__dirname);

app.listen(port,function () {
	console.log('Express server started on port'+ port );
});
 