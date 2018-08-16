console.log("get.js working");
const express = require('express');
const {ObjectID} = require('mongodb');
var app = express.Router();
//import model
var {User} = require('../models/user');
var {Airport} = require('../models/airport');
var {Order} = require('../models/order');

app.get('/user',(req, res)=>{
	User.find().then((userMesssage) =>	{
		res.send({userMessage});
	}, (err) => {
		res.status(400).send(err);
	});
});
//GET /todos/12343214, build api
app.get('/user/:id',(req, res)=>{
	var id = req.params.id;
	//valid id using isValid
	//response 404 -send back empty send
	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}//test with postman
	//findById
	User.findById(id).then((todo)=>{
		if(!todo){
			return res.status(404).send();
		}
		res.send({todo});
	}).catch((e)=>{
		res.status(400).send();
	});
});

module.exports = app;