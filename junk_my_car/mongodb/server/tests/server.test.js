const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('../server');
const {Todo} = require('../models/todo');

//array of todo object
const todos  = [{
	_id : new ObjectID(),
	text : 'First todo object'
},	{
	_id: new ObjectID(),
	text : 'Second todo object'
}];

//database will be empty before post
beforeEach((done)=>{
	Todo.remove({}).then(()=>{
		return Todo.insertMany(todos);
	}).then(()=>{done();});
});

describe('POST /todos', ()=>{
	it('should create a new todo',(done)=>{
		var text ='Test for todo';

		request(app)
		.post('/todos')
		.send({text})
		.expect(200)
		.expect((res)=>{
			expect(res.body.text).toBe(text);
		})
		.end((err, res)=>{
			if(err){
				return done(err);
			}

			Todo.find({text}).then((todos)=>{
				expect(todos.length).toBe(1);
				expect(todos[0].text).toBe(text);
				done();
			}).catch((e)=>done(e));
		});
	});

	it('should not create todo with invaild body data',(done)=>{
		var text ='';

		request(app)
		.post('/todos')
		.send({text})
		.expect(400)
		.end((err, res)=>{
			if(err){
				return done(err);
			}
			Todo.find().then((todos)=>{
				expect(todos.length).toBe(2);
				done();
			}).catch((err)=>done(err));

		});
	});
});

describe('GET /todos',()=>{
	it('should get all todos', (done)=>{
		request(app)
		.get('/todos')
		.expect(200)
		.expect((res) => {
			expect(res.body.todos.length).toBe(2);
		})
		.end(done);
	});
});



describe('GET /todos/:id', ()=>{
	it('should return todo doc', (done)=>{
		request(app)
		.get(`/todos/${todos[0]._id.toHexString()}`)
		.expect(200)
		.expect((res) => {
			expect(res.body.todo.text).toBe(todos[0].text);
		})
		.end(done);
	});

	it('should return 404 if todo not found', (done) => {
		var hexID = new ObjectID().toHexString();

		request(app)
		.get('/todos/123123')
		.expect(404)
		.end(done);
		//make sure you get a 404 back
	})

	it('should return 404 if not id', (done) => {
		var hexID = new ObjectID().toHexString();

		request(app)
		.get('/todos/123123')
		.expect(404)
		.end(done);
		// /todos/123
	})
});



