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
var mongoose = require('mongoose');
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

module.exports= {User};