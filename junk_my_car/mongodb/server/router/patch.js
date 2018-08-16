const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
var app = express.Router();
//import model
var {User} = require('../models/user');
var {Airport} = require('../models/airport');
var {Order} = require('../models/order');

app.patch('/user/:id', (req, res) =>{
	var id = req.params.id;
	var body = _.pick(req.body, ['UserName', 'Email']);

	if(!ObjectID.isValid(id)) {
		return res.status(400).send();
	}
	
	User.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo)=>{
		if(!todo){
			return res.status(404).send();
		}
		res.send({todo});
	}).catch((err) => {
		res.status(400).send();
	});
});

module.exports = app;