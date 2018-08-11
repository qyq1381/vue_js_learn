const {mongoose} = require('./server/db/mongoose');
const {Todo} = require('./server/models/todo');
const {User} = require('./server/models/user')
const {ObjectID} = require('mongodb');

/*
Todo.remove({}).then((result)=>{
	console.log(result);
});
*/

//Todo.findOneAndRemove
Todo.findOneAndRemove({_id:'5b6e47e972cabb103a46dfa5'}).then((removed_items)=>{
	console.log(removed_items)
})

//Todo.findByIdAndRemove

//							input the id you want
Todo.findByIdAndRemove('5b6e47e972cabb103a46dfa5').then((todo_items)=>{
	console.log(todo_items);
})

//

