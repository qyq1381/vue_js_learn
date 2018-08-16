const _ = require('lodash');	//load low_dash library
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const port = 3000;

var {mongoose} = require('./db/mongoose');
var {User} = require('./models/user');
var {Airport} = require('./models/airport');
var {Order} = require('./models/order');
var app = express();

app.listen(port, ()=>{
	console.log("Started listening port "+port);
});
//middleware
app.use(express.static('public'));

app.use(bodyParser.json());
//solved bug "Access-Control-Allow-Origin"
app.use(function(req, res, next) { 
	res.header("Access-Control-Allow-Origin", "*"); 
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); 
	next(); 
});
//post router
app.use(require('./router/post'));
//get router
app.use(require('./router/get'));
//delete router
app.use(require('./router/delete'));
//patch or update router
app.use(require('./router/patch'));

module.exports = {app};

