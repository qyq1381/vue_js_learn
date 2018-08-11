
require('./config');
const	_ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
//
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
//set port
const port = process.env.PORT || 3000;
//middleware
app.use(bodyParser.json());

app.post('/todos',(req, res)=>{
	//test console.log(req.body);
	var todo = new Todo({
		text : req.body.text
	});
	todo.save().then((doc)=>{
		res.send(doc);
	}, (e)=>{
		res.status(400).send(e);
	});
});

app.get('/todos',(req, res)=>{
	Todo.find().then((todos)=>{
		res.send({todos});
	}, (err)=>{
		res.status(400).send(err);
	});
});


//GET /todos/12343214, build api
app.get('/todos/:id',(req, res)=>{
	var id = req.params.id;
	//valid id using isValid
	//response 404 -send back empty send
	if(!ObjectID.isValid(id)){
		return res.status(404).send();
	}//test with postman
	
	//findById
	Todo.findById(id).then((todo)=>{
		if(!todo){
			return res.status(404).send();
		}

		res.send({todo});

	}).catch((e)=>{
		res.status(400).send();
	});

	
	//success
		//if todo - send it back
		//if no todo - send back 404 with empty
	//error
		//400 and send empty body back
})

app.delete('/todos/:id', (req, res) => {
	//get id
	var _id = req.params.id;
	//validate id
	console.log('delete work');
	if(!ObjectID.isValid(_id)){
		console.log('isValid');
		return res.status(404).send();
	}

	Todo.findByIdAndRemove(_id).then((todo) => {
		if(!todo){
			console.log('!todo happens')
			return res.status(404).send();
		}
		res.send({todo});
	}).catch((err) => {
		console.log('delete error: ' + err);
		res.status(400).send();
	});
});


app.patch('/todos/:id', (req, res) =>{
	var id = req.params.id;
	var body = _.pick(req.body, ['text', 'completed']);

	if(!ObjectID.isValid(id)) {
		return res.status(400).send();
	}

	if(_.isBoolean(body.completed) && body.completed){
		body.completedAt = new Date().getTime();
	}else{
		body.completed = false;
		body.completedAt = null;
	}

	Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo)=>{
		if(!todo){
			return res.status(404).send();
		}

		res.send({todo});
	}).catch((err) => {
		res.status(400).send();
	})
});
app.listen(port, ()=>{
	console.log(`Started up at port ${port}`);
});
/*
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/');
*/
module.exports = {app};




