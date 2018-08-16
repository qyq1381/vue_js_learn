const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
var app = express.Router();
//import model
var {User} = require('../models/user');
var {Airport} = require('../models/airport');
var {Order} = require('../models/order');

app.delete('/user/:id', (req, res) => {
	//get id
	var _id = req.params.id;
	//validate id
	console.log('delete work');
	if(!ObjectID.isValid(_id)){
		return res.status(404).send();
	}
	User.findByIdAndRemove(_id).then((todo) => {
		if(!todo){
			return res.status(404).send();
		}
		res.send({todo});
	}).catch((err) => {
		console.log('delete error: ' + err);
		res.status(400).send();
	});
});

module.exports = app;