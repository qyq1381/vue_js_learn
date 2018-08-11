const {mongoose} = require('./server/db/mongoose');
const {Todo} = require('./server/models/todo');
const {User} = require('./server/models/user')

var id = '5b6e0b0253c7fc3a0cd60ea73d3';
var userid = '';

Todo.find({
	_id : id
}).then((todos)=>{
	console.log('Todos', todos);
});

Todo.findOne({
	_id: id
}).then((todo)=>{
	console.log('Todo',todo);
})

Todo.findById(id).then((todo)=>{
	if(!todo){
		//told the user invaild id input
		return console.log('Id not found')
	}
	console.log('find by id', todo);
}).catch((e)=>console.log(e));

User.findById(id).then((user)=>{
	if(!user){
		return console.log('Unable to find user')
	}

	console.log(JSON.stringify(user, undefined, 2));
}, (err)=>{
	console.log(err);
});