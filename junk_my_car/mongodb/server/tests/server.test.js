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
		.get(`/todos/${hexID}`)
		.expect(404)
		.end(done);
		//make sure you get a 404 back
	});

	it('should return 404 if not id', (done) => {

		request(app)
		.get(`/todos/$123123`)
		.expect(404)
		.end(done);
		// /todos/123
	});
});

describe('DELETE /todos/:id', ()=>{
	it('should remove a todo', (done)=>{
		var hexID = todos[1]._id.toHexString();

		request(app)
		.delete(`/todos/${hexID}`)
		.expect(200)
		.expect((res) => {
			expect(res.body.todo._id).toBe(hexID);
		}).end((err, res) => {
			if(err) {
				return done(err);
			}

			Todo.findById(hexID).then((todo)=>{
				expect(todo).toNotExist();
				done();
			}).catch((err) => done(err));
		});
	});

	it('should return 404 if todo not found', (done)=>{
		var hexID = new ObjectID().toHexString();

		request(app)
		.delete(`/todos/${hexID}`)
		.expect(404)
		.end(done);
	});

	it('should return 404 if object id invaild', (done)=>{

		request(app)
		.delete(`/todos/dad978hjkjkh`)
		.expect(404)
		.end(done);
	});
	
});


describe('PATCH /todos/:id', ()=>{
	it('should create the todo',(done)=>{
		var hexID = todos[0]._id.toHexString();
		var text = 'this is new text';

		request(app)
		.patch(`/todos/${hexID}`)
		.send({
			completed : true,
			text
		})
		.expect(200)
		.expect((res)=>{
			expect(res.body.todo.text).toBe(text);
			expect(res.body.todo.completed).toBe(true);
			expect(res.body.todo.completedAt).toBeA('number');
		})
		.end(done);
		//grad id of first item
		//update text, set completed 
		//200
		//text is changed, completed is true, completedAt
	});

	it('should completed at ', (done)=>{
		var hexID = todos[1]._id.toHexString();
		var text = 'this is new text!!';

		request(app)
		.patch(`/todos/${hexID}`)
		.send({
			completed : false,
			text
		})
		.expect(200)
		.expect((res)=>{
			expect(res.body.todo.text).toBe(text);
			expect(res.body.todo.completed).toBe(false);
			expect(res.body.todo.completedAt).toNotExist();
		})
		.end(done);
		//grab id of second todo item
		//update text, set completed to false
		//200
		//text is changed, completed false, completedAt is null .toNotExist
	});
});