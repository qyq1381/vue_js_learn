var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/');

var Todo = mongoose.model('Todo',{
	text: {
		//could set the schema here
		type: String,
		require:true,
		minlength: 1,
		trim: true
	},
	completed:{
		type: Boolean,
		default: false
	},
	completedAt:{
		type: Number,
		default: null
	}
});

//make router
/*
var newTodo = new Todo({
	text:'Cook dinner'
});

newTodo.save().then((doc)=>{
	console.log('Saved todo', doc);
},(e)=>{
	console.log('Unable to save todo');
});
*/
var otherTodo = new Todo({
	text : false
});
//design a user
//email -require it - trim it -set type - set min length of 1
var User = mongoose.model('User',{
	email:{
		type: String,
		trim: true,
		require: true,
		minlength: 1
	}
})

var user = new User({
	email: 'sonedigo@gmail.com'
})

user.save().then((doc)=>{
	console.log('User saved', doc);
},(err)=>{
	console.log('Unable to save user', err);
});
// save the project into the database with mongoose
//<new_file_name>.<return a promise>.<callback_function>
	otherTodo.			save().			then((doc)=>{
	console.log(JSON.stringify(doc, undefined, 2));
},(e)=>{
	console.log('Unable to save', e);
})