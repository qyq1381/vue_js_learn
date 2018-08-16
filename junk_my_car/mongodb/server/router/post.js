console.log("post.js working");
const express = require('express');
var app = express.Router();
//import model
var {User} = require('../models/user');
var {Airport} = require('../models/airport');
var {Order} = require('../models/order');

app.post('/user',(req, res)=>{
	console.log("/user post work");
	var user = new User({
		UserName: req.body.UserName,
		UserPsw: req.body.UserPsw,
		Email: req.body.Email,
		Phone: req.body.Phone,
		IdNumber: req.body.IdNumber
	});
	user.save().then((doc) => {
		res.status(200).send(doc);
	}, (err) => {
		res.status(400).send(err);
	});
});

app.post('/airport', (req, res)=>{
	var airport = new Airport({
		State: req.body.state,
		City: req.body.city,
		Airport: req.body.airport 
	});
	airport.save().then((doc) => {
		res.send(doc);
	}, (err) => {
		res.status(400).send(err);
	})
});

app.post('/order', (req, res)=>{
	var order = new Order({
		ContactName: req.body.ContactName,
		DepartureDate: req.body.DepartureDate,
		FlightNumber: req.body.FlightNumber,
		Location: req.body.Location,
		Passenger: req.body.Passenger,
		Luggage: req.body.Luggage,
		OrderNumber: req.body.OrderNumber,
		IdNumber: req.body.IdNumber,
		PickupTime: req.body.PickupTime
	});
	order.save().then((doc) => {
		res.send(doc);
	}, (err) => {
		res.status(400).send(err);
	});
});

module.exports = app;
